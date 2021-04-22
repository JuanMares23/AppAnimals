import { Injectable } from '@angular/core';
import User from '../interfaces/user';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersDB: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersDB = this.db.list('/Users', (ref) => ref.orderByChild('name'))
  }

  getUsers(): Observable<User[]> {
    return this.usersDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addUser(user: User) {
    return this.usersDB.push(user);
  }

  deleteUser(id: string) {
    this.db.list('/Users').remove(id);
  }

  updateUser(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Users').update($key, newData);
  }
}

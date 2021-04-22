import { Injectable } from '@angular/core';
import Case from '../interfaces/case';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private casesDB: AngularFireList<Case>;

  constructor(private db: AngularFireDatabase) {
    this.casesDB = this.db.list('/Cases', (ref) => ref.orderByChild('creation_date'))
  }

  getCases(): Observable<Case[]> {
    return this.casesDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addCase(item: Case) {
    return this.casesDB.push(item);
  }

  deleteCase(id: string) {
    this.db.list('/Cases').remove(id);
  }

  updateCase(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Cases').update($key, newData);
  }

}

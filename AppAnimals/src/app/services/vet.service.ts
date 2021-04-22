import { Injectable } from '@angular/core';
import Vet from '../interfaces/vet';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  private vetsDB: AngularFireList<Vet>;

  constructor(private db: AngularFireDatabase) {
    this.vetsDB = this.db.list('/Vets', (ref) => ref.orderByChild('name'))
  }

  getVets(): Observable<Vet[]> {
    return this.vetsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addVet(vet: Vet) {
    return this.vetsDB.push(vet);
  }

  deleteVet(id: string) {
    this.db.list('/Vets').remove(id);
  }

  updateVet(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Vets').update($key, newData);
  }
}

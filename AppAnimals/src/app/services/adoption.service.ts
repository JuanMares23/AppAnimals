import { Injectable } from '@angular/core';
import Adoption from '../interfaces/adoption';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private adoptionsDB: AngularFireList<Adoption>;

  constructor(private db: AngularFireDatabase) {
    this.adoptionsDB = this.db.list('/Adoptions', (ref) => ref.orderByChild('name'))
  }

  getAdoptions(): Observable<Adoption[]> {
    return this.adoptionsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addAdoption(adoption: Adoption) {
    return this.adoptionsDB.push(adoption);
  }

  deleteAdoption(id: string) {
    this.db.list('/Adoptions').remove(id);
  }

  updateAdoption(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Adoptions').update($key, newData);
  }
}

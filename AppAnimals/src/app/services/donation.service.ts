import { Injectable } from '@angular/core';
import Donation from '../interfaces/donation';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private donationsDB: AngularFireList<Donation>;

  constructor(private db: AngularFireDatabase) {
    this.donationsDB = this.db.list('/Donations', (ref) => ref.orderByChild('creation_date'))
  }

  getDonations(): Observable<Donation[]> {
    return this.donationsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addDonation(donation: Donation) {
    return this.donationsDB.push(donation);
  }

  deleteDonation(id: string) {
    this.db.list('/Donations').remove(id);
  }

  updateDonation(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Donations').update($key, newData);
  }
}

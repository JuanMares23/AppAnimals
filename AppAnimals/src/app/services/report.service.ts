import { Injectable } from '@angular/core';
import Report from '../interfaces/report';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private reportsDB: AngularFireList<Report>;

  constructor(private db: AngularFireDatabase) {
    this.reportsDB = this.db.list('/Reports', (ref) => ref.orderByChild('creation_date'))
  }

  getReports(): Observable<Report[]> {
    return this.reportsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addReport(report: Report) {
    return this.reportsDB.push(report);
  }

  deleteReport(id: string) {
    this.db.list('/Reports').remove(id);
  }

  updateReport(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Reports').update($key, newData);
  }
}

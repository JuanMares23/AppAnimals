import { Injectable } from '@angular/core';
import Evaluation from '../interfaces/evaluation';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private evaluationsDB: AngularFireList<Evaluation>;

  constructor(private db: AngularFireDatabase) {
    this.evaluationsDB = this.db.list('/Evaluations', (ref) => ref.orderByChild('creation_date'))
  }

  getEvaluations(): Observable<Evaluation[]> {
    return this.evaluationsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addEvaluation(evaluation: Evaluation) {
    return this.evaluationsDB.push(evaluation);
  }

  deleteEvaluation(id: string) {
    this.db.list('/Evaluations').remove(id);
  }

  updateEvaluation(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Evaluations').update($key, newData);
  }
}

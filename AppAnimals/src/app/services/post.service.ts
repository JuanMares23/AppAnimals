import { Injectable } from '@angular/core';
import Post from '../interfaces/post';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsDB: AngularFireList<Post>;

  constructor(private db: AngularFireDatabase) {
    this.postsDB = this.db.list('/Posts', (ref) => ref.orderByChild('creation_date'))
  }

  getPosts(): Observable<Post[]> {
    return this.postsDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      })
    );
  }

  addPost(post: Post) {
    return this.postsDB.push(post);
  }

  deletePost(id: string) {
    this.db.list('/Posts').remove(id);
  }

  updatePost(newData) {
    const $key = newData.$key;
    delete newData.$key;
    this.db.list('/Posts').update($key, newData);
  }
}

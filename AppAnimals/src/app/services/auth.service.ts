import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import User from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User = null;

  constructor(
    public afAuth: AngularFireAuth,
    private userService: UserService,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = {
          id: '',
          name: user.displayName,
          mail: user.email,
          photo: user.photoURL.replace('s96-c', 's400-c'),
          creation_date: new Date().getTime(),
          grade: 1,
          phone: '6672545434',
          role: 'user',
          permissions: null,
          noAdoptions: 0,
          noCases: 0,
          noPosts: 0,
          status: true,
        };
      }
    });
  }

  // Sign in with Google
  login() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  public signOut() {
    return this.afAuth
      .signOut()
      .then(() => {
        this.user = null;
        this.router.navigateByUrl('/inicio');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(async (result) => { })
      .catch((error) => {
        console.log(error);
      });
  }

  isLogged(): boolean {
    return this.user !== null;
  }
}

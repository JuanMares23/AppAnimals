import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (!this.authService.isLogged()) {
      this.router.navigateByUrl('/inicio');
      return false;
    }

    return true;
  }
}

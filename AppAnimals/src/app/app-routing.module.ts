import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileGuard } from './guards/profile.guard';
import { ComoAyudarComponent } from './pages/como-ayudar/como-ayudar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'cases', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'como-ayudar', component: ComoAyudarComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [ProfileGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { InterestingPostsComponent } from './components/interesting-posts/interesting-posts.component';
import { HomeComponent } from './pages/home/home.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Services
import { AdoptionService } from './services/adoption.service';
import { CaseService } from './services/case.service';
import { DonationService } from './services/donation.service';
import { EvaluationService } from './services/evaluation.service';
import { PostService } from './services/post.service';
import { ReportService } from './services/report.service';
import { UserService } from './services/user.service';
import { VetService } from './services/vet.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProfilePopupComponent } from './components/profile-popup/profile-popup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileGuard } from './guards/profile.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaseCardComponent,
    InterestingPostsComponent,
    HomeComponent,
    InicioComponent,
    UserProfileComponent,
    ProfilePopupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [
    AdoptionService,
    CaseService,
    DonationService,
    EvaluationService,
    PostService,
    ReportService,
    UserService,
    VetService,
    DatePipe,
    ProfileGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

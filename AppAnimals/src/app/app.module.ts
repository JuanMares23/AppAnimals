import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaseCardComponent,
    InterestingPostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [AdoptionService, CaseService, DonationService, EvaluationService, PostService, ReportService, UserService, VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

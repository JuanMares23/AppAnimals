import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

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

// Components
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: '/Home', component: HomeComponent },
    //   // { path: 'products/:productId', component: ProductDetailsComponent },
    // ])
  ],
  providers: [AdoptionService, CaseService, DonationService, EvaluationService, PostService, ReportService, UserService, VetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

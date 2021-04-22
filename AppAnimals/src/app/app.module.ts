import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { InterestingPostsComponent } from './components/interesting-posts/interesting-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaseCardComponent,
    InterestingPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

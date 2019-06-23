import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Letter1Component } from './challenge/letter1/letter1.component';
import { Letter2Component } from './challenge/letter2/letter2.component';
import { Letter3Component } from './challenge/letter3/letter3.component';
import { Letter4Component } from './challenge/letter4/letter4.component';
import { Letter5Component } from './challenge/letter5/letter5.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'challenge', component: ChallengeComponent },
  { path : 'challenge/Аа', component: Letter1Component },
  { path : 'challenge/Бб', component: Letter2Component },
  { path : 'challenge/Вв', component: Letter3Component },
  { path : 'challenge/Гг', component: Letter4Component },
  { path : 'challenge/Дд', component: Letter5Component },
  { path : '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    NotFoundComponent,
    Letter1Component,
    Letter2Component,
    Letter3Component,
    Letter4Component,
    Letter5Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

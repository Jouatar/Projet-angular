import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoggedPageComponent } from 'src/app/logged-page/logged-page.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'logged-page', component: LoggedPageComponent },
  { path: 'home/deck', component: DeckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

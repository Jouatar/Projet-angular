import { StoreComponent } from './store/store.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoggedPageComponent } from 'src/app/logged-page/logged-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: LoggedPageComponent },
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

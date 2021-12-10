import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedPageComponent,
    FormLoginComponent,
    StoreComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

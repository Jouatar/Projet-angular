import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeckComponent } from './deck/deck.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedPageComponent,
    FormLoginComponent,
    PokemonCardComponent,
    StoreComponent,
    NavBarComponent,
    DeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

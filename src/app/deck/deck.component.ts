import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './../nav-bar/nav-bar.component';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

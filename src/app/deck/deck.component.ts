import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  cards: Array<string> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe((data:any) => {
      this.cards = data.deck;
      console.log(data.deck);
    });;
  }

}

import { PokemonService } from 'src/app/pokemon.service';
import { AppComponent } from './../app.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { UserServiceService } from 'src/app/user-service.service';
import { filter } from 'rxjs-compat/operator/filter';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  cards: Array<string> = [];
  @Input() id_pk: string = "182";
  attaque: number = 0;
  attaqueLimit: number = 100;
  content: Array<number> = [];

  constructor(private userService: UserServiceService, private pokemonService: PokemonService) { }



  ngOnInit(): void {

  }


}

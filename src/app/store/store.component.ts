import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { PokemonService } from 'src/app/pokemon.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  cards: Array<string> = [];
  imagePath = "../assets/deck.jpg";

  constructor(private pokemon: PokemonService) { }

  ngOnInit(): void {

  }

  openBooster(){
    this.pokemon.generateBooster(10).subscribe((data:Array<string>) => {
      this.cards = data;
      console.log(data);
    });;
  }

  // addPokemonToDeck() {
  //   this.pokemon.addPokemon().subscribe((data:Array<string>) => {
  //     this.cards = data;
  //     console.log(data);
  //   });;
  // }

}

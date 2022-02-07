import { PokemonService } from 'src/app/pokemon.service';
import { AppComponent } from './../app.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { UserServiceService } from 'src/app/user-service.service';

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
    this.userService.getData().subscribe((data: any) => {
      this.cards = data.deck;
      console.log(this.cards);
      this.cards.forEach((element) => {
        this.pokemonService.getPokemon(parseInt(element)).subscribe((data: any) => {
          if(data.stats.attack >= this.attaqueLimit){
            this.content[parseInt(element)] = parseInt(data.stats.attack);
          }
        });
      });
      this.pokemonService.getPokemon(parseInt(this.cards[1])).subscribe((data: any) => {
        console.log("Attaque du pokemon:", this.attaque);
      })
    })
    setTimeout(() => {
      console.log(this.content);
    }, 5000);
  }

  // getAttack(id: any) {
  //   let id_poke = id;
  //   this.pokemonService.getPokemon(id_poke).subscribe((data:any) => {
  //     this.attaque = data.stats.attack;
  //   });;
  //   return this.attaque;
  // }


}

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
  attaqueLimit: string = '';
  attackValue = 0;

  constructor(private userService: UserServiceService, private pokemonService: PokemonService) { }



  ngOnInit(): void {
    this.userService.getData().subscribe((data: any) => {
      this.cards = data.deck;
    })
  }

  rebuildCards(): void{
    this.userService.getData().subscribe((data: any) => {
      this.cards=[]
      data.deck.forEach((element:any) => {
        this.pokemonService.getPokemon(parseInt(element)).subscribe((data: any) => {
          if(data.stats.attack >= this.attaqueLimit){
            this.cards.push(element);
          }
        });
      });
    })
  }
  // getAttack(id: any) {
  //   let id_poke = id;
  //   this.pokemonService.getPokemon(id_poke).subscribe((data:any) => {
  //     this.attaque = data.stats.attack;
  //   });;
  //   return this.attaque;
  // }


}

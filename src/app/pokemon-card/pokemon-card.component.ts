import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { PokemonService } from 'src/app/pokemon.service';
import { RefreshService } from '../refresh.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() id_pk: string = "1";
  @Input() isStore: boolean = false;
  name: string = "";
  image: string = "";
  type: string = "";
  pv: number = 0;
  defense: number = 0;
  attaque: number = 0;
  vitesse: number = 0;
  cards: Array<string> = [];
  private subscriptionName: Subscription;

  constructor(private pokemon: PokemonService,private userService: UserServiceService, private refresh: RefreshService) {
    this.subscriptionName= this.refresh.getUpdate().subscribe
    (message => {this.ngOnInit();
    });
   }

  ngOnInit(): void {
    this.pokemon.getPokemon(parseInt(this.id_pk)).subscribe((data:any) => {
      this.name = data.name;
      this.type = data.type;
      this.image = data.image;
      this.pv = data.stats.hp;
      this.defense = data.stats.defense;
      this.attaque = data.stats.attack;
      this.vitesse = data.stats.speed;

    });;
  }

  isShow = false;
  deletePokemonFromDeck() {
    console.log("ID pokemon: ", this.id_pk);
    this.isShow = !this.isShow;
    this.pokemon.deletePokemon(parseInt(this.id_pk)).subscribe((data:Array<string>) => {
    });
  }

}

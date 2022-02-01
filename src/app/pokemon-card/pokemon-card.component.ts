import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() id_pk: string = "1";
  name: string = "";
  image: string = "";
  pv: number = 0;
  defense: number = 0;
  attaque: number = 0;
  vitesse: number = 0;
  constructor(private pokemon: PokemonService) { }

  ngOnInit(): void {

    this.pokemon.getPokemon(parseInt(this.id_pk)).subscribe((data:any) => {
      console.log(data);
      this.name = data.name;
      this.image = data.image;
      this.pv = data.stats.hp;
      this.defense = data.stats.defense;
      this.attaque = data.stats.attack;
      this.vitesse = data.stats.speed;
    });;
  }

}



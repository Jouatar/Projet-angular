import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { PokemonService } from 'src/app/pokemon.service';
@Component({
  selector: 'app-logged-page',
  templateUrl: './logged-page.component.html',
  styleUrls: ['./logged-page.component.css']
})
export class LoggedPageComponent implements OnInit {
  
  constructor(private userService: UserServiceService,private pokemon: PokemonService) { }

  ngOnInit(): void {
    console.log("OK");

    /* Mettre à jour l'utilisateur connecté : ("nom", nombre de monnaie, [array de string de chiffre entre 1 et 200])*/
    // this.userService.update("test",12, ["45"]).subscribe((data:any) => {
    //   console.log(data);
    // });;

    /* Récupérer les données de l'utilisateur */
    // this.userService.getData().subscribe((data:any) => {
    //   console.log(data);
    // });;

    /* Supprimer l'utilisateur de la base */
    // this.userService.delete().subscribe((data:any) => {
    //   console.log(data);
    // });;

    /* Récupérer les données d'un Pokémon */
    // this.pokemon.getPokemon(1).subscribe((data:any) => {
    //   console.log(data);
    // });;
  }

}

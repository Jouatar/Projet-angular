import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/user-service.service';
import { Observable,Subject } from 'rxjs';
import 'rxjs/add/observable/of';

export interface Pokemon{
  name: string,
  poke_id:	number,
  image:	string,
  type:	string,
  stats: Array<String>
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient,private userService: UserServiceService) { }

  getPokemon(id: number): Observable<Pokemon>{
    var subject = new Subject<Pokemon>();
    this.http.get<Pokemon>('https://lostin70s.com/lpwebfront/api/pokemon/'+id).subscribe((data: Pokemon) => {
      subject.next(data);
    });
    return subject.asObservable() ;
  }

  generateBooster(nb: number): Observable<Array<string>>{
    var subject = new Subject<Array<string>>();

    this.userService.getData().subscribe((data:any) => {
      if (data.coins < 10){
        subject.next([]);
        alert("Vous n'avez plus d'argent pour acheter des Pokémons!")
      } else {
        var table: Array<string> = [];
        var returnTable: Array<string> = [];
        const max = 200;
        for(var i=0;i<nb; i++){
          let randomNumber = -1;
          while(randomNumber < 1){
            randomNumber = Math.floor(Math.random() * max);
          }
          table.push(randomNumber.toString());
          returnTable.push(randomNumber.toString());
        }

        this.userService.getData().subscribe((data:any) => {
          data.deck.forEach((item:string) => {
            table.push(item);
          })
          console.log(data);
          this.userService.update(data.name, (data.coins-10), table).subscribe((data:any) => {
            subject.next(returnTable); //permet de retourner et donc d'afficher les 10 pokémons
          });;
        });;
      }
    });;

    return subject.asObservable() ;
  }

  //Suppression d'un pokémon
  deletePokemon(id: number): Observable<Array<string>>{
    var subject = new Subject<Array<string>>();
    this.userService.getData().subscribe((data:any) => {
        var table: Array<string> = [];
        var index = data.deck.indexOf(id.toString());
        data.deck.splice(index, 1);
        this.userService.update(data.name, (data.coins+1), data.deck).subscribe((data:any) => {
            console.log(data);
            subject.next(data.deck);
          });
    });
    return subject.asObservable() ;
  }

}

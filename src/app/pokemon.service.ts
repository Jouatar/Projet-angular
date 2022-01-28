import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user.model';
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
  
  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    var subject = new Subject<Pokemon>();
    this.http.get<Pokemon>('https://lostin70s.com/lpwebfront/api/pokemon/'+id).subscribe((data: Pokemon) => {
      subject.next(data);
    });
    return subject.asObservable() ;
  }
}

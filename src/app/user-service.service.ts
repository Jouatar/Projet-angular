import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

export interface ApiLogin {
  token:String
}

export interface UserLogin{
  user: String,
  coins: number,
  deck: Array<String>
}

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  token: String = "";
  constructor(private http: HttpClient) { }

  login(usn : String): Observable<Boolean>{
    let dataLogin: Boolean = false;
    this.http.post<ApiLogin>('https://lostin70s.com/lpwebfront/api/poke-user/login',{name: usn}).subscribe((data: ApiLogin) => {
      this.token = data.token;
      
      if(this.token){
        dataLogin = true;
      }
      
    });
    return new Observable<Boolean>(dataLogin) ;
  }
}


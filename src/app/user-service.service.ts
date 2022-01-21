import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user.model';
import { Observable,Subject } from 'rxjs';
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
    var subject = new Subject<boolean>();
    let dataLogin: boolean = false;
    this.http.post<ApiLogin>('https://lostin70s.com/lpwebfront/api/poke-user/login',{name: usn}).subscribe((data: ApiLogin) => {
      console.log(data.token);
      this.token = data.token;
      
      if(this.token){
        dataLogin = true;
      }

      subject.next(dataLogin);
      
    });
    return subject.asObservable() ;
  }
}


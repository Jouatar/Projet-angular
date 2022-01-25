import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user.model';
import { Observable,Subject } from 'rxjs';
import 'rxjs/add/observable/of';

export interface ApiLogin {
  token: string
}

export interface ApiDelete {
    n: number,
    deletedCount: number,
    ok: number,
    statusCode: number,
    message: string,
    error: string
}

export interface UserLogin{
  user: string,
  coins: number,
  deck: Array<String>
}

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  constructor(private http: HttpClient) { }

  login(usn : String): Observable<Boolean>{
    var subject = new Subject<boolean>();
    let dataLogin: boolean = false;
    this.http.post<ApiLogin>('https://lostin70s.com/lpwebfront/api/poke-user/login',{name: usn}).subscribe((data: ApiLogin) => {
      console.log(data.token);
      sessionStorage.setItem('token', data.token);
      if(sessionStorage.getItem('token') as string){
        dataLogin = true;
      }

      subject.next(dataLogin);
      
    });
    return subject.asObservable() ;
  }

  getData(): Observable<UserLogin>{
    var subject = new Subject<UserLogin>();
    let dataUpdate: boolean = false;
    let token: string = sessionStorage.getItem('token') as string;
    const headers = { 'token': token };
    this.http.get<UserLogin>('https://lostin70s.com/lpwebfront/api/poke-user/user', { headers }).subscribe((data: UserLogin) => {
      subject.next(data);
    });
    return subject.asObservable() ;
  }

  update(name: string, coins: number, deck: Array<string>): Observable<Boolean>{
    var subject = new Subject<boolean>();
    let dataUpdate: boolean = false;
    let token: string = sessionStorage.getItem('token') as string;
    const headers = { 'token': token };
    const body = { name: name, coins: coins,deck: deck };
    this.http.put<ApiDelete>('https://lostin70s.com/lpwebfront/api/poke-user', body, { headers }).subscribe((data: ApiDelete) => {
      
      if(data.ok){
        dataUpdate = true;
      }

      subject.next(dataUpdate);
      
    });
    return subject.asObservable() ;
  }

  delete(): Observable<Boolean>{
    var subject = new Subject<boolean>();
    let dataDelete: boolean = false;
    let token: string = sessionStorage.getItem('token') as string;
    const headers = { 'token': token };
    this.http.delete<ApiDelete>('https://lostin70s.com/lpwebfront/api/poke-user',{ headers }).subscribe((data: ApiDelete) => {
      
      if(data.ok){
        sessionStorage.removeItem('token');
        dataDelete = true;
      }

      subject.next(dataDelete);
      
    });
    return subject.asObservable() ;
  }
  
}


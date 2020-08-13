import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticated = false;

  authenticate(credentials : User , callback){
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8088', {headers: headers}).subscribe(response => {
        console.log(response);
        return callback && callback();
      },(err) => {
        console.log("erreur")
        console.log(err)
      }  
    );
  }

}

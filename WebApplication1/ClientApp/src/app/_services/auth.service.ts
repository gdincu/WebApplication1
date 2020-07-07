import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
//import { JwtHelperService } from "@auth0/angular-jwt";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//import { User } from '../_shared/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService  {

  private baseUrl = 'https://localhost:44382/api/auth/';
  //jwtHelper = new JwtHelperService();
  decodedToken: any;
  model: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            //this.decodedToken = this.jwtHelper.decodeToken(user.token);
            //console.log(this.decodedToken);
          }
        })
      );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
}    
  

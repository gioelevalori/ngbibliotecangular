import { environment } from './../../environments/environment';
import { User } from './../classes/user';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";
import { Role } from '../interface/role';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

interface Jwt {
  access_token: string,
  token_type: string
  expires_in : number,
  user_name: string,
  email: string
}


@Injectable()
export class AuthService {
  private isUserLogged = false;
  @Output() usersignedin = new EventEmitter<User>()
  @Output() usersignedup = new EventEmitter<User>()
  @Output() userlogout = new EventEmitter()
  @Output() admin = new EventEmitter()

  public user?: Observable<User>;
  private userSubject: BehaviorSubject<User>;

  private APIAUTHURL = environment.APIAUTH;
  constructor(private http: HttpClient,private router: Router ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')as any));
    this.user = this.userSubject.asObservable();
  }


  isUserLoggedIn() {

    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string) {

  return this.http.post(this.APIAUTHURL + 'login',
      {
        email: email,
        password: password
      }
    ).pipe(tap(
      (payload: any) => {
        localStorage.setItem('token', payload.access_token);
        console.log(payload)
        this.profile().subscribe()
        return true;

      }
    ));
    }


    getAuthHeader(): HttpHeaders {
      const headers = new HttpHeaders(
        {
          Authorization : 'Bearer ' + this.getToken()
        }
      );
      return headers;
    }



    profile() {
      return this.http.get(this.APIAUTHURL + 'me',
      {
       headers: this.getAuthHeader()
      }
        ).pipe(tap(
          (payload: any) => {
            localStorage.setItem('user' , JSON.stringify(payload));
            let user = new User();
            user.id = payload.id;
            user.name = payload.name;
            user.lastname = payload.lastname;
            user.phone = payload.phone;
            user.email = payload.email;
            user.role = payload.role;
            this.usersignedin.emit(user);
            return true;
          }
        ));
        }







  signUp(username: string, _lastname:string, email: string,  _phone: string, password: string) {

    const user = new User();
    user.name = username;
    user.lastname = _lastname;
    user.email = email;
    user.phone = _phone;

   return this.http.post(this.APIAUTHURL + 'signup',
      {
        email: email,
        password: password,
        name : username,
        lastname : _lastname,
        phone : _phone
      }
    ).pipe(tap(
      (payload: any) => {
        localStorage.setItem('token', payload.access_token);
        console.log(payload);
        localStorage.setItem('user' , JSON.stringify(payload));

        this.usersignedup.emit(user);


      } ,
      (httpResp: HttpErrorResponse) => {

        alert(httpResp.message);
      }
    ));
  }
   logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userlogout.emit();
    this.isUserLogged = false;
  }
  getUser(): User {
    const data = JSON.parse(<string>localStorage.getItem('user'));
    let user = new User();
    if(data){
      user.id = data.id;
      user.name = data.name;
      user.lastname = data.lastname;
      user.phone = data.phone;
      user.email = data.email;
      user.role = data.role;
      console.log(data);

    }
    return user;
  }
  getToken() {
    return localStorage.getItem('token');
  }

}

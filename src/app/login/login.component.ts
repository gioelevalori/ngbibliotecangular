import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide = true;

  public user!:User;

  constructor( private  auth: AuthService, private router: Router) { }

  ngOnInit() { }

  signIn(form: NgForm): any{
    if(!form.valid){
      return false;
    }

    this.auth.signIn(form.value.email, form.value.password).subscribe(
        (payload: any) => {
          alert('login riuscito')
         this.router.navigate(['/']);

        },
        ({error}) => {
          alert(error.error)
          console.log(error)
        }
      )

  }
  redirectAdmin(){
    if(this.user?.role=='admin') {
      return true;
    } else {
      return false;
    }

  }


get isAdmin() {
  return this.user && this.user.role === 'admin';
}


}


 /* async signIn(form: NgForm){
    if(!form.valid){
      return false;
    }

    try {
    const resp = await this.auth.signIn(form.value.email, form.value.password)
    .toPromise();
    alert(resp.access_token + 'logged in successfully');
    this.router.navigate(['/']);
    } catch (e) {
      switch (e.status) {
        case 401:
          alert(e.error.error);
          break;
        case 404:
          alert(e.error.statusText);
          break;
        case 500:
          alert('error contacting server');
          break;
      }
    } */








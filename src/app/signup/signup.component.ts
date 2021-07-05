import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import { User } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user!:User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
   /* this.auth.usersignedup.subscribe( () => {
      this.router.navigate(['/']);
    }); */
  }
  signUp(form: NgForm) {
    this.auth.signUp(form.value.name, form.value.lastname, form.value.email, form.value.phone, form.value.password)
    .subscribe(resp => {
      alert('Registrazione avvenuta');
      this.router.navigate(['/']);

    },

    ({error}) => {
     // alert(error.error)
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



}

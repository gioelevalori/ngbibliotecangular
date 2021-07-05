import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../interface/role';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isDarkTheme: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  //public user!: User;
  @Output() onNewUser = new EventEmitter;
  @Output() Ruolo = new EventEmitter;
  public isUserLoggedIn = false;
  public name:any;
  public utente!:User;




  public user!: {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: string;
    phone: string
  }






  constructor(private auth : AuthService, private router : Router, private overlay: OverlayContainer,private breakpointObserver: BreakpointObserver) {
    auth.usersignedin.subscribe(
      (user: User) => {
        this.name = user.name;
        this.isUserLoggedIn = true;
        this.user = user;
      }
    );


    auth.userlogout.subscribe(
      () => {
        this.name = '';
        this.isUserLoggedIn = false;
      }
    );
    auth.usersignedup.subscribe(
      (user: User) => {
        this.name = user.name;
        this.isUserLoggedIn = true;
      }
    );
  }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    if(this.isUserLoggedIn) {
      this.user = this.auth.getUser();
      this.name = this.user.name;
    }
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  newUser() {
    this.onNewUser.emit()
  }
  logout(e : any) {
    e.preventDefault();
    this.auth.logout();
     this.router.navigate(['login']);
  }

  signIn(e : any) {
    e.preventDefault();
     this.router.navigate(['login']);
  }

  signUp(e : any) {
    e.preventDefault();
     this.router.navigate(['signup']);
  }


  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }




}

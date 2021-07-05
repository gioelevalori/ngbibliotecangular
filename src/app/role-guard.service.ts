import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor( private router : Router, private auth : AuthService) { }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    const user = this.auth.getUser();
    const role = route.data.role;
    console.log(user,role);
    if(user && user.role == role) {
      return true;


    } else {
      this.router.navigate(['/dashboard']);
    }return true;
  }
}

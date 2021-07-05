import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';
import { UtenteService } from '../services/utente.service';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {
  private usercopy : any;
  private __user : any;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UtenteService, private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe(response => {
      this.__user = response;
      const id = this.route.snapshot.params.id;
      this.userService.show(id).subscribe(response => this.user = response['data']);
      console.log(this.route.snapshot.params);

    });
  }
backToUsers(){
    this.router.navigate(['dashboard']);
}


   updateUser(user : User) {
    const id = this.route.snapshot.params.id;
    this.userService.updateUser(id, user.name, user.lastname, user.email, user.phone).subscribe((response : any) => {
      console.log(response);
      this.user = response;


    });
  }



  resetForm(form:any) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }

}

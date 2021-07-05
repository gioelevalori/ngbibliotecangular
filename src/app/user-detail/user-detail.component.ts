import { UserService } from './../services/users.service';
import { User } from './../classes/user';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy : any;
  private __user : any;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute,
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
    this.router.navigate(['admin/users']);
}
  /*saveUser() {
    if (this.user.id > 0) {
      this.updateUser();
    } else {
      this.createUser();
    }

  }*/

   updateUser(user : User) {
    const id = this.route.snapshot.params.id;
    this.userService.updateUser(id, user.name, user.lastname, user.email, user.phone).subscribe((response : any) => {
      console.log(response);
      this.user = response;
      alert('Utente modificato')
      this.router.navigate(['admin/users']);
    });
  }

   createUser() {
    this.userService.createUser(this.user).subscribe(
      response => {

        if (response['success']) {
          alert('User ' + this.user.name + ' creato corettamente');
          this.router.navigate(['users']);

        } else {
          alert(response['message']);
        }
      }
    );
  }

  resetForm(form:any) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }



}

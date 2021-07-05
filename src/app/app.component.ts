import { User } from './classes/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  userSelected : any = new User();


  updateUser(User: User) {
    this.showForm = true;
    this.userSelected = User;
  }

  newUser() {
    this.userSelected = new User();
    this.showForm = true;
  }


}

import { UserService } from '../services/users.service';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user : any;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();



  constructor(private userService : UserService, private route: Router) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
    //this.userService.deleteUser(this.user);
  }

  updateUser() {
    this.route.navigate(['admin/users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
    //this.userService.deleteUser(this.user);
  }

  showUserDetail() {
    this.route.navigate(['admin/users', this.user.id]);
  }

}

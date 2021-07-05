import { UserService } from './../services/users.service';
import { User } from './../classes/user';
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  @Output('updateUser') updateUser = new EventEmitter<User>();
  dataSource: any;
  clickedRows = new Set<User>();

  filteredOptions?: Observable<any[]>;

  constructor(private userService: UserService) { }

  public filterTerm?: any;

  ngOnInit() {
    this.userService.getUsers().subscribe(res => this.users = res['data']);
  }

  onDeleteUser(user: User) {
    const deleteUser = confirm("Vuoi davvero eliminare l'utente"+
      user.name + ' ' + user.lastname + '');
    if(deleteUser) {
      this.userService.deleteUser(user).subscribe(
        response => {
        const idx = this.users.indexOf(user);
        this.users.splice(idx, 1);
          alert(response as any['message']);

        }
      );
    }
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}

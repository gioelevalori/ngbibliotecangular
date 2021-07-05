import { UserService } from './../services/users.service';
import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public User: any;
  title: any = 'User Detail';
  constructor(private route:ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.User = new User();
    this.route.params.subscribe(p => {
          this.userService.getUser(+p.id)
         .subscribe( res => {
            this.User = res['data']
         });
       });
  }

  backToUsers() {
    this.router.navigate(['admin/users']);
  }

}

import {Role} from '../interface/role';
import {UserInterface} from '../interface/user';


export class Admin implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  role: Role;
  phone: string;


  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.role = Role.Admin;
    this.phone = '';

  }
}

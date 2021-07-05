import {Role} from './../interface/role';
import {UserInterface} from './../interface/user';


export class User implements UserInterface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  role: string;
  phone: string;


  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.role = '';
    this.phone = '';

  }
}

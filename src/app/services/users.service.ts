import { environment } from './../../environments/environment.prod';
import { User } from './../classes/user';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "./auth.service";
import { Observable } from 'rxjs';

interface UsersResponse {
  data: User[];
  message: string,
  success: boolean
}

@Injectable()


export class UserService {
  users: User[] = [];
private APIURL = environment.APIURL;
  constructor(private http: HttpClient, private auth: AuthService) {
  }
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        Authorization : 'Bearer ' + this.auth.getToken()
      }
    );
    return headers;
  }
  getUsers() {
    return  this.http.get<UsersResponse>(this.APIURL , {
      headers: this.getAuthHeader()
    });
  }
  getUser(id: number) {
    return this.http.get<UsersResponse>(this.APIURL + '/' + id, {
      headers: this.getAuthHeader()
    });
  }
  show(id: number): Observable<any>{
    return this.http.get(this.APIURL + '/' + id, {
      headers: this.getAuthHeader()
    });
  }

  deleteUser(user: User) {
    return this.http.delete<UsersResponse>(this.APIURL + '/' + user.id,  {
      headers: this.getAuthHeader()
    });

  }

  updateUser(id: number, name: string, lastname : string, email: string, phone : string) {
    return this.http.put('http://127.0.0.1:8000/api/users/' + id,{id, name, lastname, email, phone}, {
      headers: this.getAuthHeader()
    });

  }


  createUser(user: User) {
    return this.http.post<UsersResponse>(this.APIURL , user);

  }

}

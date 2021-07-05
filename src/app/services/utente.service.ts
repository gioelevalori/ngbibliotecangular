import { environment } from '../../environments/environment.prod';
import { User } from '../classes/user';
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


export class UtenteService {
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


  show(id: number): Observable<any>{
    return this.http.get(this.APIURL + '/' + id, {
      headers: this.getAuthHeader()
    });
  }



  updateUser(id: number, name: string, lastname : string, email: string, phone : string) {
    return this.http.put('http://127.0.0.1:8000/api/users/' + id,{id, name, lastname, email, phone}, {
      headers: this.getAuthHeader()
    });

  }




}

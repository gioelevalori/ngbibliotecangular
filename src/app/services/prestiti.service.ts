import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment.prod';

interface UsersResponse {
  data: User[];
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PrestitiService {




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


listbook(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/libri');
  }



list(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/prestiti');
}


jsontest(): Observable<any>{
  return this.http.get('assets/jsonapi/test.json');
}

create( utente_id: string, libro_id: string, data_prestito: string, data_riconsegna: string ) {
  return this.http.post('http://127.0.0.1:8000/api/prestiti/', {utente_id, libro_id,data_prestito,data_riconsegna});
}

show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/prestiti/'+id);
}

update(id: number, utente_id: string, libro_id: string, data_prestito: string, data_riconsegna: string) {
  return this.http.put('http://127.0.0.1:8000/api/prestiti/'+id,{utente_id, libro_id,data_prestito,data_riconsegna});
}

delete(id: string) {
  return this.http.delete('http://127.0.0.1:8000/api/prestiti/'+ id);
}

}

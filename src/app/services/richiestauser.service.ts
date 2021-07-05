import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RichiesteUserService {

constructor(private http : HttpClient) { }

listbook(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/libri');
}

jsontest(): Observable<any>{
  return this.http.get('assets/jsonapi/test.json');
}

create( email: string, libro_id: string, descrizione: string ) {
  return this.http.post('http://127.0.0.1:8000/api/richieste/', {email, libro_id, descrizione});
}

show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/richieste/'+id);
}



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RichiesteService {

constructor(private http : HttpClient) { }

list(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/richieste');
}


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

update(id: number, email: string, libro_id: string, descrizione: string ) {
  return this.http.put('http://127.0.0.1:8000/api/richieste/'+id,{email, libro_id, descrizione});
}

delete(id: string) {
  return this.http.delete('http://127.0.0.1:8000/api/richieste/'+ id);
}

}

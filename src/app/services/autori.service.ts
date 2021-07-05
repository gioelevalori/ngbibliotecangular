import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class AutoriService {


constructor(private http: HttpClient) { }


list(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/autori');
}


jsontest(): Observable<any>{
  return this.http.get('assets/jsonapi/test.json');
}

show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/autori/'+id);
}

create( nome: string, cognome: string ) {
  return this.http.post('http://127.0.0.1:8000/api/autori/', {nome,cognome});
}

update(id: number, nome: string, cognome: string) {
  return this.http.put('http://127.0.0.1:8000/api/autori/'+id,{nome,cognome});
}

delete(id: string) {
  return this.http.delete('http://127.0.0.1:8000/api/autori/'+ id);
}


}

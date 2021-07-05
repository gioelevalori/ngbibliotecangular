import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Editori } from '../classes/editori';






@Injectable({
  providedIn: 'root'
})
export class EditoriService {


constructor(private http: HttpClient) { }


list(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/editori');
}


jsontest(): Observable<any>{
  return this.http.get('assets/jsonapi/test.json');
}

create( nome: string, sito_editore: string ) {
  return this.http.post('http://127.0.0.1:8000/api/editori/', {nome, sito_editore});
}

show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/editori/'+id);
}

update(id: number, nome: string, sito_editore: string) {
  return this.http.put('http://127.0.0.1:8000/api/editori/'+id,{nome,sito_editore});
}

delete(id: string) {
  return this.http.delete('http://127.0.0.1:8000/api/editori/'+ id);
}


}

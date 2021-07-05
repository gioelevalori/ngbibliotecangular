import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

constructor(private http : HttpClient) { }

listautori(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/autori');
}


listeditori(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/editori');
}



list(): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/libri');
}


jsontest(): Observable<any>{
  return this.http.get('assets/jsonapi/test.json');
}

create(
  titolo: string,
  editore_id: string,
  autore_id: string,
  luogo_edizione: string,
  genere: string,
  condizione_libro: string,
  pagine: string,
  isbn: string,
  isbn13: string,
  descrizione: string,
  anno_edizione: string,
  stato: string ) {
  return this.http.post('http://127.0.0.1:8000/api/libri/', {titolo, editore_id, autore_id, luogo_edizione,genere,condizione_libro,pagine,isbn,isbn13,descrizione,anno_edizione,stato});
}

show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/libri/'+id);
}

update(
  id: number,
  titolo: string,
  editore_id: string,
  autore_id: string,
  luogo_edizione: string,
  genere: string,
  condizione_libro: string,
  pagine: string,
  isbn: string,
  isbn13: string,
  descrizione: string,
  anno_edizione: string,
  stato: string) {
  return this.http.put('http://127.0.0.1:8000/api/libri/'+id,{
    titolo, editore_id, autore_id, luogo_edizione,genere,condizione_libro,pagine,isbn,isbn13,descrizione,anno_edizione,stato});
}

delete(id: string) {
  return this.http.delete('http://127.0.0.1:8000/api/libri/'+ id);
}




}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibriUserService {

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



show(id: number): Observable<any>{
  return this.http.get('http://127.0.0.1:8000/api/libri/'+id);
}



}

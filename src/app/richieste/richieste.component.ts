import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RichiesteService } from '../services/richieste.service';

@Component({
  selector: 'app-richieste',
  templateUrl: './richieste.component.html',
  styleUrls: ['./richieste.component.css']
})
export class RichiesteComponent implements OnInit {

  public richieste!: {
    id: number,
    email: string,
    libro_id: string,
    descrizione: string,
    libri : {
      id: number,
      titolo: string,
      editore_id: string,
      autore_id: string,
      luogo_edizione: string,
      genere: string,
      condizione_libro: string,
      codice: string,
      isbn: string,
      isbn13: string,
      descrizione: string,
      anno_edizione: string,
      stato: string,
    }
  }[];


  public api!: {
    id: number,
    email: string,
    libro_id: string,
    descrizione: string,
  };

  name?: string;

  filteredOptions?: Observable<any[]>;

  constructor(private richiesteService: RichiesteService, private router: Router) { }

  public filterTerm?: any;

  ngOnInit(): void {
    this.richiesteService.list().subscribe( response => {
      console.log(response);
      this.richieste = response;
    });

    this.richiesteService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });

  }

  newPrestiti(){
    this.router.navigate(['admin/richieste']);
  }

}

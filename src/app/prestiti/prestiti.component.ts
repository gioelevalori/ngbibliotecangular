import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PrestitiService } from '../services/prestiti.service';

@Component({
  selector: 'app-prestiti',
  templateUrl: './prestiti.component.html',
  styleUrls: ['./prestiti.component.css']
})
export class PrestitiComponent implements OnInit {

  public prestiti!: {
    id: number,
    utente_id: string,
    libro_id: string,
    data_prestito: string,
    data_riconsegna: string,
    user: {
      id: number;
      name: string;
      lastname: string;
      email: string;
      role: string;
      phone: string
    },
    libri: {
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
      stato: string
    }
  }[];

  public users!: {
    id: number,
    name: string,
    lastname: string,
    email: string,
    phone: string,
  }[];

  public api!: {
    id: number,
    nome: string,
    cognome: string,
  };

  filteredOptions?: Observable<any[]>;

  constructor(private prestitiService: PrestitiService, private router: Router) { }

  public filterTerm?: any;

  ngOnInit(): void {
    this.prestitiService.list().subscribe( response => {
      console.log(response);
      this.prestiti = response;
      this.users = response;
    });

    this.prestitiService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });

  }

  newPrestiti(){
    this.router.navigate(['admin/prestitinew']);
  }

}

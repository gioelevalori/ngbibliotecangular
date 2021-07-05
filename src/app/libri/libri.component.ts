import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LibriService } from '../services/libri.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent implements OnInit {

  public libri!: {
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
    stato: string,
    autori:{
      id: number,
      nome: string,
      cognome: string,
    },
    editori: {
      id: number,
      nome: string,
      sito_editore: string,
    }
  }[];

  public api!: {
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
    stato: string
  };


  public editori!: {
    id: number,
    nome: string,
    sito_editore: string,


  };

  filteredOptions?: Observable<any[]>;

  constructor(private route: ActivatedRoute, private libriService: LibriService, private router: Router) { }

  public filterTerm?: any;

  ngOnInit(): void {
    this.libriService.list().subscribe( response => {
      console.log(response);
      this.libri = response;
    });

    this.libriService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });


  }

  newLibri(){
    this.router.navigate(['admin/librinew']);
  }


}

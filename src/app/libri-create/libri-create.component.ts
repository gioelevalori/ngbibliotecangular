import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriService } from '../services/libri.service';

@Component({
  selector: 'app-libri-create',
  templateUrl: './libri-create.component.html',
  styleUrls: ['./libri-create.component.css']
})
export class LibriCreateComponent implements OnInit {
  public libri!: {
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
  };


  public autori!: {
    id: number,
    nome: string,
    cognome: string,
  }[];

    public editori!: {
    id: number,
    nome: string,
    sito_editore: string,
  }[];



  constructor(private route: ActivatedRoute, private libriservice: LibriService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.libriservice.show(id).subscribe(response => {
      console.log(response);
      this.libri = response;
    });

    this.libriservice.listautori().subscribe( response => {
      console.log(response);
      this.autori = response;
    });

    this.libriservice.listeditori().subscribe( response => {
      console.log(response);
      this.editori = response;
    });


  }

  create(titolo: string,
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
    stato: string) {

    this.libriservice.create(titolo, editore_id, autore_id, luogo_edizione,genere,condizione_libro,codice,isbn,isbn13,descrizione,anno_edizione,stato).subscribe((response : any) => {
      console.log(response);
      this.libri = response;
      alert('libro aggiunto')
    });
  }

  backLibri(){
    this.router.navigate(['admin/libri']);
  }


}

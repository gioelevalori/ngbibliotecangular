import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriService } from '../services/libri.service';

@Component({
  selector: 'app-libri-detail',
  templateUrl: './libri-detail.component.html',
  styleUrls: ['./libri-detail.component.css']
})
export class LibriDetailComponent implements OnInit {



  campaignOne?: FormGroup;
  campaignTwo?: FormGroup;


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


  constructor(private route: ActivatedRoute, private libriservice: LibriService, private router: Router) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();


    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });

   }

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

  update(titolo: string, editore_id: string, autore_id: string, luogo_edizione: string, genere: string,  condizione_libro: string,  pagine: string,  isbn: string,isbn13: string,descrizione: string,anno_edizione: string, stato: string) {
    const id = this.route.snapshot.params.id;
    this.libriservice.update(id, titolo, editore_id, autore_id, luogo_edizione,genere,condizione_libro,pagine,isbn,isbn13,descrizione,anno_edizione,stato).subscribe((response : any) => {
      console.log(response);
      this.libri = response;
      alert('libro modificato')
    });
  }

  delete() {
    const id = this.route.snapshot.params.id;
    this.libriservice.delete(id).subscribe((response : any) => {
      console.log(response);
      this.libri = response;
      alert('libro eliminato')
      this.router.navigate(['admin/libri']);
    });
  }

  backLibri(){
    this.router.navigate(['admin/libri']);
  }



}

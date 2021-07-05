import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriUserService } from '../services/libriuser.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

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
    autori: {
      id: number,
      nome: string,
      cognome: string,
    }
    editori : {
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


  constructor(private route: ActivatedRoute, private libriuserservice: LibriUserService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.libriuserservice.show(id).subscribe(response => {
      console.log(response);
      this.libri = response;
    });

    this.libriuserservice.listautori().subscribe( response => {
      console.log(response);
      this.autori = response;
    });

    this.libriuserservice.listeditori().subscribe( response => {
      console.log(response);
      this.editori = response;
    });

  }

  richiesta(){
    this.router.navigate(['richiesta']);
  }

  backLibri(){
    this.router.navigate(['dashboard']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RichiesteService } from '../services/richieste.service';

@Component({
  selector: 'app-richieste-detail',
  templateUrl: './richieste-detail.component.html',
  styleUrls: ['./richieste-detail.component.css']
})
export class RichiesteDetailComponent implements OnInit {

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
  };

  public libri! : {
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
  }[];



  constructor(private route: ActivatedRoute, private richiesteservice: RichiesteService, private router: Router) { }

  backRichieste(){
    this.router.navigate(['admin/richieste']);
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.richiesteservice.show(id).subscribe(response => {
      console.log(response);
      this.richieste = response;
    });


    this.richiesteservice.listbook().subscribe( response => {
      console.log(response);
      this.libri = response;
    });


  }

  update(email: string, libro_id: string, descrizione: string) {
    const id = this.route.snapshot.params.id;
    this.richiesteservice.update(id, email, libro_id, descrizione).subscribe((response : any) => {
      console.log(response);
      this.richieste = response;
    });
  }

  delete() {
    const id = this.route.snapshot.params.id;
    this.richiesteservice.delete(id).subscribe((response : any) => {
      alert('eliminato')
      this.router.navigate(['admin/richieste']);
      console.log(response);
      this.richieste = response;
    });
  }

}

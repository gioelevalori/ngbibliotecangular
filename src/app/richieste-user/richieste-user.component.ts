import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RichiesteUserService } from '../services/richiestauser.service';

@Component({
  selector: 'app-richieste-user',
  templateUrl: './richieste-user.component.html',
  styleUrls: ['./richieste-user.component.css']
})
export class RichiesteUserComponent implements OnInit {

  public richieste!: {
    id: number,
    email: string,
    libro_id: string,
    descrizione: string,
  };

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
  }[];



  constructor(private route: ActivatedRoute, private richiesteuserservice: RichiesteUserService, private router: Router) { }


  backRichiesta(){
    this.router.navigate(['dashboard']);
  }



  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.richiesteuserservice.show(id).subscribe(response => {
      console.log(response);
      this.richieste = response;
    });

    this.richiesteuserservice.listbook().subscribe( response => {
      console.log(response);
      this.libri = response;
    });

  }

  create( email: string, libro_id: string, descrizione: string ) {

    this.richiesteuserservice.create(email, libro_id, descrizione).subscribe((response : any) => {
      console.log(response);
      alert('Richiesta inviata')
      this.richieste = response;
      this.router.navigate(['dashboard']);
    });
  }

}

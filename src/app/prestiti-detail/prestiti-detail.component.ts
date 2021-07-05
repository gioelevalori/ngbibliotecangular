import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestitiService } from '../services/prestiti.service';

@Component({
  selector: 'app-prestiti-detail',
  templateUrl: './prestiti-detail.component.html',
  styleUrls: ['./prestiti-detail.component.css']
})
export class PrestitiDetailComponent implements OnInit {

  public prestiti!: {
    id: number,
    utente_id: string,
    libro_id: string,
    data_prestito : string,
    data_riconsegna : string,
    users: {
      id: number,
      name: string,
      lastname: string,
      email : string,
      phone : string
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
    },
  };

  public users!: {
    id: number,
    name: string,
    lastname: string,
    email : string,
    phone : string
  }[];


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


  constructor(private route: ActivatedRoute, private prestitiservice: PrestitiService, private router: Router) { }

  backPrestiti(){
    this.router.navigate(['admin/prestiti']);
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.prestitiservice.show(id).subscribe(response => {
      console.log(response);
      this.prestiti = response;
    });

    this.prestitiservice.getUsers().subscribe(res => this.users = res['data']);

    this.prestitiservice.listbook().subscribe( response => {
      console.log(response);
      this.libri = response;
    });




  }

  update(utente_id: string, libro_id: string, data_prestito: string, data_riconsegna: string,) {
    const id = this.route.snapshot.params.id;
    this.prestitiservice.update(id, utente_id, libro_id, data_prestito, data_riconsegna).subscribe((response : any) => {
      console.log(response);
      this.prestiti = response;
      alert('prestito modificato')
    });
  }

  delete() {
    const id = this.route.snapshot.params.id;
    this.prestitiservice.delete(id).subscribe((response : any) => {
      alert('eliminato')
      this.router.navigate(['admin/prestiti']);
      console.log(response);
      this.prestiti = response;
      alert('prestito eliminato')
      this.router.navigate(['admin/prestiti']);
    });
  }

}

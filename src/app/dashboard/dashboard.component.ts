import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibriUserService } from '../services/libriuser.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public filterTerm?: any;


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

  public api!: {
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

  filteredOptions?: Observable<any[]>;

  constructor(private route: ActivatedRoute, private libriuserService: LibriUserService, private router: Router) { }

  ngOnInit(): void {
    this.libriuserService.list().subscribe( response => {
      console.log(response);
      this.libri = response;
    });

    this.libriuserService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });


  }

  newLibri(){
    this.router.navigate(['admin/librinew']);
  }



}

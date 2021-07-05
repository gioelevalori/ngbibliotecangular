import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoriService } from '../services/autori.service';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent implements OnInit {

  public autori!: {
    id: number,
    nome: string,
    cognome: string,
  }[];

  public api!: {
    id: number,
    nome: string,
    cognome: string,
  };

  filteredOptions?: Observable<any[]>;

  constructor(private autoriService: AutoriService, private router: Router) { }

  public filterTerm?: any;

  newAutori(){
    this.router.navigate(['admin/autorinew']);
  }


  ngOnInit(): void {
    this.autoriService.list().subscribe( response => {
      console.log(response);
      this.autori = response;
    });

    this.autoriService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });

  }

}

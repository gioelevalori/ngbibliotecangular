import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Editori } from '../classes/editori';

import { EditoriService } from '../services/editori.service';

@Component({
  selector: 'app-editori',
  templateUrl: './editori.component.html',
  styleUrls: ['./editori.component.css']
})
export class EditoriComponent implements OnInit {

  public editori!: {
    id: number,
    nome: string,
    sito_editore: string,
  }[];

  public api!: {
    id: number,
    nome: string,
    sito_editore: string,
  };

  filteredOptions?: Observable<any[]>;

  constructor(private route: ActivatedRoute, private editoriService: EditoriService, private router: Router) { }

  public filterTerm?: any;

  newEditori(){
    this.router.navigate(['admin/editorinew']);
}







  ngOnInit(): void {
    this.editoriService.list().subscribe( response => {
      console.log(response);
      this.editori = response;
    });

    this.editoriService.jsontest().subscribe( response => {
      console.log(response);
      this.api = response;

    });


  }




}












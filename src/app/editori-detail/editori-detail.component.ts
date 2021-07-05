import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditoriService } from '../services/editori.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editori-detail',
  templateUrl: './editori-detail.component.html',
  styleUrls: ['./editori-detail.component.css']
})
export class EditoriDetailComponent implements OnInit {

  public editori!: {
    id: number,
    nome: string,
    sito_editore: string,
  };


  constructor(private route: ActivatedRoute, private editoriservice: EditoriService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.editoriservice.show(id).subscribe(response => {
      console.log(response);
      this.editori = response;
    });
  }

  update(nome : string, sito_editore : string) {
    const id = this.route.snapshot.params.id;
    this.editoriservice.update(id, nome, sito_editore).subscribe((response : any) => {
      console.log(response);
      this.editori = response;
      alert('editore modificato')
    });
  }

  delete() {
    const id = this.route.snapshot.params.id;
    this.editoriservice.delete(id).subscribe((response : any) => {
      console.log(response);
      this.editori = response;
      alert('editore eliminato')
      this.router.navigate(['admin/editori']);
    });
  }

  backEditori(){
    this.router.navigate(['admin/editori']);
}

}

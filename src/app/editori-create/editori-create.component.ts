import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditoriService } from '../services/editori.service';

@Component({
  selector: 'app-editori-create',
  templateUrl: './editori-create.component.html',
  styleUrls: ['./editori-create.component.css']
})
export class EditoriCreateComponent implements OnInit {

  public editori!: {
    id: number,
    nome: string,
    sito_editore: string,
  };




  constructor(private route: ActivatedRoute, private editoriservice: EditoriService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.editoriservice.show(id).subscribe(response => {
      console.log(response);
      this.editori = response;
    });
  }

  create(nome : string, sito_editore : string) {

    this.editoriservice.create(nome, sito_editore).subscribe((response : any) => {
      console.log(response);
      this.editori = response;
      alert('editore aggiunto')
    });
  }

  backEditori(){
    this.router.navigate(['admin/editori']);
}

}

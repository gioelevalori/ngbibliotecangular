import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoriService } from '../services/autori.service';

@Component({
  selector: 'app-autori-create',
  templateUrl: './autori-create.component.html',
  styleUrls: ['./autori-create.component.css']
})
export class AutoriCreateComponent implements OnInit {

  public autori!: {
    id: number,
    nome: string,
    cognome: string,
  };


  constructor(private route: ActivatedRoute, private autoriservice: AutoriService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.autoriservice.show(id).subscribe(response => {
      console.log(response);
      this.autori = response;
    });
  }

  create(nome : string, cognome : string) {

    this.autoriservice.create(nome, cognome).subscribe((response : any) => {
      console.log(response);
      this.autori = response;
      alert('autore aggiunto')
    });
  }

  backAutori(){
    this.router.navigate(['admin/autori']);
}

}

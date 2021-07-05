import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AutoriService } from '../services/autori.service';

@Component({
  selector: 'app-autori-detail',
  templateUrl: './autori-detail.component.html',
  styleUrls: ['./autori-detail.component.css']
})
export class AutoriDetailComponent implements OnInit {

  public autori!: {
    id: number,
    nome: string,
    cognome: string,
  };


  constructor(private route: ActivatedRoute, private autoriservice: AutoriService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params.id;
    this.autoriservice.show(id).subscribe(response => {
      console.log(response);
      this.autori = response;
    });
  }

  update(nome : string, cognome : string) {
    const id = this.route.snapshot.params.id;
    this.autoriservice.update(id, nome, cognome).subscribe((response : any) => {
      console.log(response);
      this.autori = response;
      alert('autore modificato')
    });
  }

  delete() {
    const id = this.route.snapshot.params.id;
    this.autoriservice.delete(id).subscribe((response : any) => {
      console.log(response);
      this.autori = response;
      alert('autore eliminato')
      this.router.navigate(['admin/autori']);
    });
  }

  backAutori(){
    this.router.navigate(['admin/autori']);
}

}

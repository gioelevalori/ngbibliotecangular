import { EditoriInterface } from './../interface/editori';


export class Editori implements EditoriInterface {
  id: number;
  nome: string;
  sito_editore: string;


  constructor() {
    this.id = 0;
    this.nome = '';
    this.sito_editore = '';;

  }
}

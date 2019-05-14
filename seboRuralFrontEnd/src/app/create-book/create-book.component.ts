import { Component, OnInit } from '@angular/core';

//Esta classe representa a estrutura de um anúncio de livro

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  titulo: string;
  autor: string;
  curso: string;
  periodo: number;
  disciplina: string;
  descricao: string;
  urlFoto: string;


  constructor() { }

  ngOnInit() {
  }

}

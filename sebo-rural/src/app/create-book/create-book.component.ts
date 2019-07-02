import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http:HttpClient
    // titulo: string,
    // autor: string,
    // curso: string,
    // periodo: number,
    // disciplina: string,
    // descricao: string,
    // urlFoto: string
    
    ) { }

  ngOnInit() {
  }

  createBook () {
    window.console.log(this.http.post('http://localhost:8080/book', {
      titulo: this.titulo,
      autor: this.autor
    }).subscribe(
      response => window.console.log(response)
    ));
  }

}

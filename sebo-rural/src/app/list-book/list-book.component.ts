import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  //two-say data binding com o template HTML
  name: string;
  username: string;
  password: string;
  livros;
  isCollapsed = false;

  constructor(private http:HttpClient) { }

  ngOnInit() {
   this.listBook();

   

    

    //this.listStudent();

    //this.createStudent();

    //this.listStudent();
  }

  listBook () {
    window.console.log(this.http.get('http://localhost:8080/book').subscribe(
      response => window.console.log(this.livros = response)
    ));
  }

  listStudent () {
    window.console.log(this.http.get('http://localhost:8080/student').subscribe(
      response => window.console.log(response)
    ));
  }

  createStudent () {
    window.console.log(this.http.post('http://localhost:8080/student', {
      name: this.name,
      username: this.username,
      password: this.password
    }).subscribe(
      response => window.console.log(response)
    ));
  }

  createBook () {
    window.console.log(this.http.post('http://localhost:8080/book', {
      titulo: "faxineiro",
      autor: "pastana",
      student: "1"
    }).subscribe(
      response => window.console.log(response)
    ));
  }

}

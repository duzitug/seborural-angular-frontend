import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  name: string = 'celia';
  username: string = 'celia_piaui';
  password: string = 'admin';
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
  
  window.console.log("Testando!");
  
  }

  listBook () {
    window.console.log(this.http.get('http://localhost:8080/book').subscribe(
      response => window.console.log(response)
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

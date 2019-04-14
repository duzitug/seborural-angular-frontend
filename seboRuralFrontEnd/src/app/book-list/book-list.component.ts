import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  name: string = 'celia';
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  listBook () {
    window.console.log(this.http.get('http://grails-workspace-merciofilho.c9users.io:8080/book').subscribe(
      response => window.console.log(response)
    ));
  }

  listUser () {
    window.console.log(this.http.get('http://grails-workspace-merciofilho.c9users.io:8080/student').subscribe(
      response => window.console.log(response)
    ));
  }

  createUser () {
    window.console.log(this.http.post('http://grails-workspace-merciofilho.c9users.io:8080/student', {
      name: this.name
    }).subscribe(
      response => window.console.log(response)
    ));
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

	livro;
  student;
  course;
	bookId: number;

  constructor(private http:HttpClient, private router: Router ) { 
  	console.log(this.bookId = this.router.getCurrentNavigation().extras.state.example);
  }

  ngOnInit() {
  	let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    window.console.log("BookId: " + this.bookId);

    this.http.get('https://sebo-rural.herokuapp.com/api/book/14'  , { headers: headers }).subscribe(
      response => {
          
        window.console.log("Livro retornado: " + (this.livro = response));
        
        this.http.get<any>('https://sebo-rural.herokuapp.com/api/course/' + this.livro.curso['id'] , { headers: headers }).subscribe(
          response => window.console.log(this.course = response)
        );

        this.http.get<any>('https://sebo-rural.herokuapp.com/api/student/' + this.livro.student['id'] , { headers: headers }).subscribe(
          response => window.console.log(this.student = response)
        );

        }
    );
 
  }

  listBook () {

  	//window.console.log(this.bookId);

  }

}
  
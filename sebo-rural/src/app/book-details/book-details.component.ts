import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

	book;
	bookId: number;

  constructor(private http:HttpClient, private router: Router ) { 
  	console.log(this.bookId = this.router.getCurrentNavigation().extras.state.example);
  }

  ngOnInit() {
  	this.listBook(); 
  }

  listBook () {

  	//window.console.log(this.bookId);

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    window.console.log(this.http.get<any>('https://sebo-rural.herokuapp.com/api/book/' + this.bookId , { headers: headers }).subscribe(
      response => window.console.log(response)
    ));
  }

}

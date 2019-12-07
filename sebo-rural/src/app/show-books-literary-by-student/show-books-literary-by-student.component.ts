import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../config_url';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-show-books-literary-by-student',
  templateUrl: './show-books-literary-by-student.component.html',
  styleUrls: ['./show-books-literary-by-student.component.css']
})
export class ShowBooksLiteraryByStudentComponent implements OnInit {

  student;
  livros;
  url;
  studentName;


  constructor(private http:HttpClient, public router: Router) {
  	this.url = url;
   }

  ngOnInit() {
  	 if (!localStorage.getItem('username')) {
      alert("Você precisa estar logado para ver os seus anúncios.");
        this.router.navigate(['newHomePage']);
    }     


    this.studentName = localStorage.getItem('username');

    let usernameLocal = localStorage.getItem('username');


    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    this.http.get(this.url + '/api/bookLiterary', { headers: headers })
    .pipe(catchError(err => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('username'); 
      this.router.navigate(['newHomePage']);
      return err;
    })).subscribe(data => {} );


    this.http.post<any>(this.url + '/api/student/getStudentByUsername', {
      username: usernameLocal
    }, { headers: headers}).subscribe(
      response => {
        this.student = response.id
        console.log(this.student)

        this.http.get<any>(this.url + '/api/bookLiterary/listBooksLiteraryByStudentId/' + this.student, { headers: headers }).subscribe(
          response => { this.livros = response;

                      }
        );

      }
    ); 

  }

  bookLiteraryDetails(livroId) {
    this.router.navigate(['ownBookLiteraryDetailsComponent'], { state: { example: livroId } });
  }

}

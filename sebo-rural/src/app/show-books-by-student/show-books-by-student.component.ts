import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../config_url';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-show-books-by-student',
  templateUrl: './show-books-by-student.component.html',
  styleUrls: ['./show-books-by-student.component.css']
})
export class ShowBooksByStudentComponent implements OnInit {

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

    this.http.get(this.url + '/api/book', { headers: headers })
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

        this.http.get<any>(this.url + '/api/book/listBooksByStudentId/' + this.student, { headers: headers }).subscribe(
          response => { this.livros = response;

                         for (let i = 0; i < this.livros.length; i++) {

                            if (this.livros[i].urlFoto.split('thumb_').length == 1) {
                  
                              let fileName = this.livros[i].urlFoto.split('%2F')[1].split('?')[0];

                              this.livros[i].urlFoto = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_' + fileName + '?alt=media' 

                          }

          }

                      }
        );

      }
    ); 

  }

  bookDetails(livroId) {
    this.router.navigate(['ownBookDetails'], { state: { example: livroId } });
  }

}

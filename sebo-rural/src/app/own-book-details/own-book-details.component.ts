import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../config_url';

@Component({
  selector: 'app-own-book-details',
  templateUrl: './own-book-details.component.html',
  styleUrls: ['./own-book-details.component.css']
})
export class OwnBookDetailsComponent implements OnInit {

  livro;
  studentId;
  student;
  course;
	bookId: number;
  url: string;

  constructor(private http:HttpClient, private router: Router ) { 
  	
    if (this.router.getCurrentNavigation().extras.state) {
      this.bookId = this.router.getCurrentNavigation().extras.state.example;
    } else {
      this.router.navigate(['listBook']);
    }
   
    this.url = url;
  }

  ngOnInit() {

  	let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    //window.console.log("BookId: " + this.bookId);

    this.http.get(this.url + '/api/book/' + this.bookId , { headers: headers }).subscribe(
      response => {
          
        this.livro = response;
        
        this.http.get<any>(this.url + '/api/course/' + this.livro.curso['id'] , { headers: headers }).subscribe(
          response => this.course = response
        );

        this.http.get<any>(this.url + '/api/student/' + this.livro.student['id'] , { headers: headers }).subscribe(
          response => this.student = response
        );

        }
    );
 
  }

  favoritar(livroId) {

    // let usernameLocal = localStorage.getItem('username');

    // this.http.post<any>(this.url + '/api/student/getStudentByUsername', {
    //   username: usernameLocal
    // }, { headers: headers}).subscribe(
    //   response => {
    //     this.studentId = response.id
    //     console.log(this.studentId)
    //   }
    // );

    // this.http.post<any>(this.url + '/api/studentBook', {
    //   student: studentId,
    //   book: livroId
    // }, { headers: headers}).subscribe(
    //   response => {
    //     window.console.log(response);
    //     alert("livro adicionado aos favoritos");
    //   }
    // );

    alert("Funcionalidade em desenvolvimento.");

  }

  editBook(livroId) {
    this.router.navigate(['editBook'], { state: { example: livroId } });
  }
  
  
  deletarBook(livroId) {

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    this.http.delete<any>(this.url + '/api/book/' + livroId , { headers: headers }).subscribe(
          response =>  { window.console.log(response) 

            alert("O seu anúncio foi deletado. Torcemos pra que agora ele esteja nas mãos de outra pessoa.")
          }
        );
  }

}

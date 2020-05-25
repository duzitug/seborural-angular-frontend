import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../../../config_url';

@Component({
  selector: 'app-own-book-literary-details',
  templateUrl: './own-book-literary-details.component.html',
  styleUrls: ['./own-book-literary-details.component.css']
})
export class OwnBookLiteraryDetailsComponent implements OnInit {

 livro;
  studentId;
  student;
  course;
bookId: number;
  url: string;	

  constructor(private http:HttpClient, private router: Router) { 
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

    this.http.get(this.url + '/api/bookLiterary/' + this.bookId , { headers: headers }).subscribe(
      response => {
          
        this.livro = response;

         if (this.livro.urlFoto.split('thumb_').length == 1) {
                  
                  let fileName = this.livro.urlFoto.split('%2F')[1].split('?')[0];

                  this.livro.urlFoto = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_' + fileName + '?alt=media' 

                }
        
        this.http.get<any>(this.url + '/api/genre/' + this.livro.genre['id'] , { headers: headers }).subscribe(
          response => this.course = response
        );

        this.http.get<any>(this.url + '/api/student/' + this.livro.student['id'] , { headers: headers }).subscribe(
          response => this.student = response
        );

        }
    );


  }

  editBookLiterary(livroId) {

    this.router.navigate(['editBookLiteraryComponent'], { state: { example: livroId } });

  }

  deletarBookLiterary(livroId) {

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    this.http.delete<any>(this.url + '/api/bookLiterary/' + livroId , { headers: headers }).subscribe(
          response =>  { window.console.log(response) 

            alert("O seu anúncio foi deletado. Torcemos pra que agora ele esteja nas mãos de outra pessoa.")
          
            this.router.navigate(['listBook'])
          }
        );
  }

}

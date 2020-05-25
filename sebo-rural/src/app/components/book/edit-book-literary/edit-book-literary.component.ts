import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../../../config_url';


@Component({
  selector: 'app-edit-book-literary',
  templateUrl: './edit-book-literary.component.html',
  styleUrls: ['./edit-book-literary.component.css']
})
export class EditBookLiteraryComponent implements OnInit {

  livro;
  studentId;
  student;
  genre;
  bookId: number;
  url: string;

  titulo: string;
  autor: string;

  descricao: string;
  urlFoto;
  preco: number;
  data: Date;
  firebaseConfig: object;
 
  courses;
  courseName;
  periodos: [];	


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

    this.http.get<any>(this.url + '/api/genre').subscribe(
      response => this.courses = response.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    })
    );

    this.http.get(this.url + '/api/bookLiterary/' + this.bookId , { headers: headers }).subscribe(
      response => {
          
        this.livro = response;

         if (this.livro.urlFoto.split('thumb_').length == 1) {
                  
                  let fileName = this.livro.urlFoto.split('%2F')[1].split('?')[0];

                  this.livro.urlFoto = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_' + fileName + '?alt=media' 

                }
        
        this.http.get<any>(this.url + '/api/genre/' + this.livro.curso['id'] , { headers: headers }).subscribe(
          response => this.genre = response
        );

        this.http.get<any>(this.url + '/api/student/' + this.livro.student['id'] , { headers: headers }).subscribe(
          response => this.student = response
        );

        }
    );
  }

  editBookLiterary(){

  	let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    this.http.put(this.url + '/api/bookLiterary/' + this.bookId, {
          titulo: this.titulo,
          autor: this.autor,
          genre: this.genre,
          descricao: this.descricao,
          preco: this.preco
        }, { headers: headers }).subscribe(
          response =>  { 
            // window.console.log(response)
             alert("Alterações salvas.") 
             this.router.navigate(['listBook'])
          }
        );



  }

}

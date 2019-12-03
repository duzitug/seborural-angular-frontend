import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from './book';
import { url } from '../config_url';
import { catchError } from 'rxjs/operators';


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
  courses;
  url: string;
  busca;
  page: number = 1;
  numeros = [1,2,3];
  courseId;
  genreId;
  genres;

  constructor(private http:HttpClient, public router: Router) {
    this.url = url;

   }

  ngOnInit() {

    if (!localStorage.getItem('username')) {
      alert("Você precisa estar logado para ter acesso aos anúncios.");
    }  

    //  this.http.get<any>(this.url + '/api/book', { headers: headers }).subscribe(
    //   response => { 
    //     this.livros = response 
    //   }
    // );

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    this.http.get(this.url + '/api/book', { headers: headers })
    .pipe(catchError(err => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('username'); 
      this.router.navigate(['newHomePage']);
      return err;

    })).subscribe(data => {} );

    
    
   this.listBookInitial();
  }

  listBookInitial () {

    let headers = new HttpHeaders();

   

    headers = headers.set('Authorization', localStorage.getItem('access_token'));



    this.http.get<any>(this.url + '/api/book/bookList', { headers: headers }).subscribe(
      response => { 
        this.livros = response 
      }
    );



    this.http.get<any>(this.url + '/api/course', { headers: headers }).subscribe(
      response => {this.courses = response.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    })}
    )

    this.http.get<any>(this.url + '/api/genre', { headers: headers }).subscribe(
      response => {this.genres = response.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    })}
    )

    

  }

  listBookByCourse(courseName) {

    this.genreId = undefined;


    let headers = new HttpHeaders();  

    headers = headers.set('Authorization', localStorage.getItem('access_token'));
    
    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>(this.url + '/api/course/getCourseByNome', {
      nome: courseName
    },{ headers: headers }).subscribe(
      response => {
        this.courseId = response.id;

        this.http.get<any>(this.url + '/api/book/listBooksByCourseId/' + response.id , { headers: headers })
        .subscribe(
          response =>  {  this.livros = response;
            // console.log(response);
            // window.console.log(courseName);
            // window.console.log(this.livros);

             if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
                if(response.length != 0) {
                  alert("Conteúdo encontrado e carregado abaixo. Deslize a tela para vê-lo.");
                } else {
                  alert("Ainda não há nenhum livro de " + courseName + " cadastrado. Seja o primeiro a anunciar!.");
                }
             } else {
               if(response.length == 0) {
                alert("Ainda não há nenhum livro de " + courseName + " cadastrado. Seja o primeiro a anunciar!");
               }
             }


                        }
                  )
        
      }
    );
  }

  listBookByGenre(genreName) {

    //alert("listBookByGenre");

    this.courseId = undefined;

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>(this.url + '/api/genre/getGenreByNome', {
      nome: genreName
    },{ headers: headers }).subscribe(
      response => {
        this.genreId = response.id;

        this.http.get<any>(this.url + '/api/bookLiterary/listBooksByGenreId/' + response.id , { headers: headers })
        .subscribe(
          response =>  {  this.livros = response;

             if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
                if(response.length != 0) {
                  alert("Conteúdo encontrado e carregado abaixo. Deslize a tela para vê-lo.");
                } else {
                  alert("Ainda não há nenhum livro de " + genreName + " cadastrado. Seja o primeiro a anunciar!.");
                }
             } else {
               if(response.length == 0) {
                alert("Ainda não há nenhum livro de " + genreName + " cadastrado. Seja o primeiro a anunciar!");
               }
             }

                        }
                  )
        
      }
    );



    //******


  }


  buscarLivros() {

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));
    

        this.http.post<any>(this.url + '/api/book/listBooksByTitulo', {
          titulo: this.busca
        }, { headers: headers }).subscribe(
          response =>  {  this.livros = response;
      

            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
                if(response.length != 0) {
                  alert("Conteúdo encontrado e carregado abaixo. Deslize a tela para vê-lo.");
                } else {
                  alert("Não foi encontrado nenhum autor ou título para " + this.busca + ". Por favor, insira também os acentos.");
                }
             } else {
               if(response.length == 0) {
                alert("Não foi encontrado nenhum autor ou título para " + this.busca + ". Por favor, insira também os acentos.");
               }
             }


    //         if(response.length == 0) {
    //           alert('Ops. Nenhum livro encontrado. Tente novamente usando acentos. ');

    //           this.http.get(this.url + '/api/book', { headers: headers }).subscribe(
    //   response => this.livros = response
    // );
    //         }

          }
        )

     
    
  }


  botaoClicado(livroId) {
    //passar id do livro
    this.router.navigate(['bookDetails'], { state: { example: livroId, courseId: this.courseId, genreId: this.genreId } });
  }


  favoritar(livroId) {
    alert("Favoritar clicaddo " + livroId);
  }

  listStudent () {
    window.console.log(this.http.get('http://localhost:8080/student').subscribe(
      response => window.console.log(response)
    ));
  }

  listBook(){
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    if(this.courseId == undefined && this.genreId == undefined) {
      this.http.get<any>(this.url + '/api/book/bookList', { headers: headers }).subscribe(
      response => { 
        this.livros = response 
      }
    );
    } else if(this.genreId == undefined) {
      this.http.get<any>(this.url + '/api/book/listBooksByCourseId/' + this.courseId , { headers: headers }).subscribe(
          response =>  {  this.livros = response; }
            
        )
    } else if(this.courseId == undefined) {
      this.http.get<any>(this.url + '/api/bookLiterary/listBooksByGenreId/' + this.genreId , { headers: headers }).subscribe(
          response =>  {  this.livros = response; }
            
        )
    }


  }

  listBookOffset(){

    let headers = new HttpHeaders();


    headers = headers.set('Authorization', localStorage.getItem('access_token'));


    if(this.courseId == undefined && this.genreId == undefined) {
      this.http.get<any>(this.url + '/api/book/bookListOffset', { headers: headers }).subscribe(
      response => { 
        this.livros = response 
      }
    );
    } else if (this.genreId == undefined) {
      this.http.get<any>(this.url + '/api/book/listBooksByCourseIdOffset/' + this.courseId , { headers: headers }).subscribe(
          response =>  {  this.livros = response; }
            
        )
    } else if (this.courseId == undefined) {
      this.http.get<any>(this.url + '/api/bookLiterary/listBooksByGenreIdOffset/' + this.genreId , { headers: headers }).subscribe(
          response =>  {  this.livros = response; }
            
        )
    }

  }

}

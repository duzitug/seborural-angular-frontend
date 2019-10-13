import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from './book';


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

  constructor(private http:HttpClient, public router: Router) { }

  ngOnInit() {
   this.listBook();


    //this.listStudent();

    //this.createStudent();

    //this.listStudent();
  }

  listBook () {

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    window.console.log(this.http.get('https://sebo-rural.herokuapp.com/api/book', { headers: headers }).subscribe(
      response => window.console.log(this.livros = response)
    ));

    this.http.get<any>('https://sebo-rural.herokuapp.com/api/course', { headers: headers }).subscribe(
      response => window.console.log(this.courses = response.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    }))
    )

  }

  listBookByCourse(courseName) {


    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));
    
    let course;

    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>('https://sebo-rural.herokuapp.com/api/course/getCourseByNome', {
      nome: courseName
    },{ headers: headers }).subscribe(
      response => {
        course = response.id
        console.log(course)

        this.http.get<any>('https://sebo-rural.herokuapp.com/api/book/listBooksByCourseId/' + course , { headers: headers }).subscribe(
          response => window.console.log(this.livros = response)
        )

        window.console.log(courseName);

      }
    );



   
    
  }


  botaoClicado(livroId) {
    //passar id do livro
    window.console.log(livroId);
    this.router.navigate(['bookDetails'], { state: { example: livroId } });
  }

  listStudent () {
    window.console.log(this.http.get('http://localhost:8080/student').subscribe(
      response => window.console.log(response)
    ));
  }
}

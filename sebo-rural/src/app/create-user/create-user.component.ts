import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  protected aFormGroup: FormGroup;

  username: string;
  password: string;  
  nome: string;
  email: string;
  courses: any[];
  courseName: string;
  course;
  studentId;


  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    // this.aFormGroup = new FormGroup({
    //    recaptcha: new FormControl()
    // });

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

 
    this.http.get<any>('https://sebo-rural.herokuapp.com/api/course', { headers: headers}).subscribe(
      courses => this.courses = courses
    );

  }


  async createUser() {


    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));

    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>('https://sebo-rural.herokuapp.com/api/course/getCourseByNome', {
      nome: this.courseName
    },{ headers: headers }).subscribe(
      response => {
        this.course = response.id
        console.log(this.course)
      }
    );

    //obtem o username
    //ele será o peimeiro nome do usuário
    this.username = this.nome.split(" ")[0];

    let inst = this.email.split("@");

    if (inst[1] === "ufrpe.br") {

      this.http.post<any>('https://sebo-rural.herokuapp.com/api/student', {
        username: this.username,
        password: this.password,
        email: this.email,
        course: this.course,
        nome: this.nome
      }, { headers: headers }).subscribe(
        response => {
          
          //console.log(this.studentId = response.id)
          
          this.http.post<any>('https://sebo-rural.herokuapp.com/api/userRole/', {
            user: response.id,
            role: 39  
          }, { headers: headers }).subscribe(
            r => {
              console.log(r)
            }
          )
        }
      );

    } else {
      alert("Você deve possuir um email institucional: nome.sobrenome@ufrpe.br");
    }

  }

}

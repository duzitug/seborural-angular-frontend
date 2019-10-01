import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {

    // this.aFormGroup = new FormGroup({
    //    recaptcha: new FormControl()
    // });

    this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });

    this.http.get<any>('https://sebo-rural.herokuapp.com/api/course', {
    }).subscribe(
      courses => this.courses = courses
    );


  }


  createUser() {

    //pega o id do curso
    this.http.post<any>('https://sebo-rural.herokuapp.com/api/course/getCourseByNome', {
      nome: this.courseName
    }).subscribe(
      response => {
        this.course = response.id
        console.log(this.course)
      }
    );

   
    
    //obtem o username
    //ele será o peimeiro nome do usuário
    this.username = this.nome.split(" ")[0];

    let inst = this.email.split("@");

    if(inst[1] === "ufrpe.br") {

        this.http.post('https://sebo-rural.herokuapp.com/api/student', {
        username: this.username,
        password: this.password,
        email: this.email,
        course: this.course,
        nome: this.nome
        }).subscribe(
          response => window.console.log(response)
        );
    
    } else {
      alert("Você deve possuir um email institucional: nome.sobrenome@ufrpe.br");
    }

  }

}

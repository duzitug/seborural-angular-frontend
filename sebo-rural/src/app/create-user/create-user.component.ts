import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
  courses;
  courseName: string;
  course: number;
  studentId: number;
  url: string;


  constructor(private http: HttpClient, private formBuilder: FormBuilder,
              public router: Router) {

               this.url = 'https://seborural.digital'; 

               }

  ngOnInit() {

    // let headers = new HttpHeaders();

    // headers = headers.set('Authorization', localStorage.getItem('access_token'));

    // this.aFormGroup = new FormGroup({
    //    recaptcha: new FormControl()
    // });

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

 
    this.http.get<any>(this.url + '/api/course').subscribe(
      courses => { this.courses = courses.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    });
                    console.log(this.courses);
      }

    );

  }


  async createUser() {


    // let headers = new HttpHeaders();

    // headers = headers.set('Authorization', localStorage.getItem('access_token'));

    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>(this.url + '/api/course/getCourseByNome', {
      nome: this.courseName
    }).subscribe(
      response => {
          this.course = response.id
          console.log(this.course)
          //obtem o username
          //ele será o peimeiro nome do usuário
          this.username = this.nome.split(" ")[0];

          let inst = this.email.split("@");

          if (inst[1] === "ufrpe.br") {

            this.http.post<any>(this.url + '/api/student', {
              username: this.username,
              password: this.password,
              email: this.email,
              course: this.course,
              nome: this.nome
            }).subscribe(
              response => {
                
                //console.log(this.studentId = response.id)

                alert("Olá, " + this.username + ", foi enviado um email de confirmação para " + this.email);
                
                this.http.post<any>(this.url + '/api/userRole/', {
                  user: response.id,
                  role: 1  
                }).subscribe(
                  r => {
                    console.log(r)
                  }
                )
              }
            );

            

            this.router.navigate(['newHomePage']);

          } else {
            alert("Você deve possuir um email institucional: nome.sobrenome@ufrpe.br");
          }
    }
  );

    

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { url } from '../../config_url';

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
  passwordConfirmacao: string;


  constructor(private http: HttpClient, private formBuilder: FormBuilder,
              public router: Router) {

               this.url = url; 

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
      }

    );

  }


  async createUser() {

    if(this.nome == undefined) {
      alert("Por favor, insira o seu nome.");
    } else if(this.nome.split(" ")[1] == undefined || this.nome.split(" ")[1] == "") {
      alert ("Olá, " + this.nome.split(" ")[0] +  ". Por favor, insira também um segundo nome.");
    } else if(this.email == undefined) {
      alert("Por favor, insira o seu email.");
    } else if(this.password == undefined) {
      alert("Por favor, insira a sua senha.");
     } else if(this.password != this.passwordConfirmacao) {
      alert("As senhas não conferem."); 
    }  else {

     
    // let headers = new HttpHeaders();

    // headers = headers.set('Authorization', localStorage.getItem('access_token'));

    //pega o id do curso a partir do nome do mesmo
    this.http.post<any>(this.url + '/api/course/getCourseByNome', {
      nome: this.courseName
    }).subscribe(
      response => {
          this.course = response.id

          if(this.nome.split(" ")[1] == "de"  || this.nome.split(" ")[1] == "De" || this.nome.split(" ")[1] == "DE" || this.nome.split(" ")[1] == "da"  || this.nome.split(" ")[1] == "Da" || this.nome.split(" ")[1] == "DA" || this.nome.split(" ")[1] == "do"  || this.nome.split(" ")[1] == "Do" || this.nome.split(" ")[1] == "DO") {
            
              this.username = this.nome.split(" ")[0] + '.' + this.nome.split(" ")[2];
           
          } else {
            this.username = this.nome.split(" ")[0] + '.' + this.nome.split(" ")[1];
          }
          
          
         // let inst = this.email.split("@");

          // if (inst[1] === "ufrpe.br") usado para verificar se o email terminal com ufrpe.br 

            this.http.post<any>(this.url + '/api/student', {
              username: this.username,
              password: this.password,
              email: this.email,
              course: this.course,
              nome: this.nome
            }).subscribe(
              response => {
                
                //console.log(this.studentId = response.id) 
                
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


            alert("Olá, " + this.nome.split(" ")[0] + ". Foi enviado um email de confirmação para " + this.email);
            

            this.router.navigate(['newHomePage']);
         
    }
  );

  } //fim do else


    



    

  }

}

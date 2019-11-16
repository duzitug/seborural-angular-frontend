import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicoService } from '../servico.service';
import { url } from '../config_url';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;
  isEmailVerified: boolean;
  url: string;

  constructor(private http: HttpClient, public router: Router, private servico: ServicoService) {
    this.url = url;
   }

   ngOnInit() {
  }

  userLogin() {

    let headers = new HttpHeaders();

    //if(this.isEmailVerified) {

    //muda o primeiro caractere para uppercase
    //window.console.log(this.username.charAt(0).toUpperCase() + this.username.slice(1));

    this.http.post<any>(this.url + '/api/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      response => {
        //window.console.log(response.access_token);
        //  window.console.log(response.username);

        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('username', response.username);

        this.servico.setAux(false);

        headers = headers.set('Authorization', localStorage.getItem('access_token'));

        //console.log(localStorage.getItem('username'));

       //ver se conta foi ou não verificada
        this.http.post<any>(this.url + '/api/student/getStudentByUsername', {
          username: this.username
        }, { headers: headers }).subscribe(
          response => {
            this.isEmailVerified = response.isEmailVerified
            //console.log(this.isEmailVerified)
            if(this.isEmailVerified) {
              this.router.navigate(['listBook']);
            } else {
              alert("O seu email ainda não foi verificado.")
            }
            //this.router.navigate(['listBook']);
          },
          
        );

      },
      err => alert("Usuário não encontrado. Verifique se a primeira letra do login é maiúscula ou minúscula.")
    );


    // } else {
    //     alert("O seu email ainda não foi verificado.")
    // }

  }


  getUserData() {
    console.log(localStorage.getItem('username'));
   }

}

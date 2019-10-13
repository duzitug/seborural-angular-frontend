import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;
  isEmailVerified: boolean;

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  userLogin() {

    let headers = new HttpHeaders();

    //if(this.isEmailVerified) {
      
    this.http.post<any>('https://sebo-rural.herokuapp.com/api/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      response => {
        window.console.log(response.access_token);
        //  window.console.log(response.username);
        
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('username', response.username);

        headers = headers.set('Authorization', localStorage.getItem('access_token'));

        //console.log(localStorage.getItem('username'));

       //ver se conta foi ou não verificada
        this.http.post<any>('https://sebo-rural.herokuapp.com/api/student/getStudentByUsername', {
          username: this.username
        }, { headers: headers }).subscribe(
          response => {
            this.isEmailVerified = response.isEmailVerified
            console.log(this.isEmailVerified)
            if(this.isEmailVerified) {
              this.router.navigate(['newHomePage']);
            } else {
              alert("O seu email ainda não foi verificado.")
            }
          }  
        );

        

        
      }
    );


    // } else {
    //     alert("O seu email ainda não foi verificado.") 
    // }

  }


  getUserData() {
    console.log(localStorage.getItem('username'));
   }

}

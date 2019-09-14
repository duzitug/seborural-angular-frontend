import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  userLogin() {
    this.http.post('https://sebo-rural.herokuapp.com/api/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      response => {
        window.console.log(response.access_token);
        window.console.log(response.username);
        
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('username', response.username);

        console.log(localStorage.getItem('username'));
        
      
      }
    );

  }


  getUserData() {
    console.log(localStorage.getItem('username'));
   }




}

import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  username: string;
  password: string;
  
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  createUser() {
    
    this.http.post('https://sebo-rural.herokuapp.com/user', {
      username: this.username,
      password: this.password
    }).subscribe(
      response => window.console.log(response)
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { url } from '../config_url';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

public id;
email: string;  
url; string;
password: string;
passwordConfirmation: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, public router: Router) { 
  	this.url = url;

    
  }
  
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
  }

  createNewPassword() {

  
    if(this.password == undefined ){
      alert("Por favor, insira a sua nova senha");
    } else if (this.password != this.passwordConfirmation) {
      alert("As senhas não conferem.");
    } else {
        this.http.post<any>(this.url + '/api/student/createNewPassword', {
          id: this.id,
          password: this.password
        }).subscribe(
          response => { 

            alert("A sua senha foi redefinida");
            this.router.navigate(['userLogin']);

          }
          );  
    }




  	
  }

}

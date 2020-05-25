import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { url } from '../../config_url';


@Component({
  selector: 'app-email-password-recovery',
  templateUrl: './email-password-recovery.component.html',
  styleUrls: ['./email-password-recovery.component.css']
})
export class EmailPasswordRecoveryComponent implements OnInit {

  email: string;	
  url;

  constructor(private http: HttpClient) { 
  	this.url = url;
  }

  ngOnInit() {
  }

  envioEmailRecuperarSenha() {

  	if(this.email == undefined) {
  		alert("Por favor, insira o seu email."); 
  	} else {

  		this.http.post<any>(this.url + '/api/student/recoverEmail', {
          email: this.email
        }).subscribe(
          response => { alert("Olá, um email foi enviado para " + this.email) }
          );
  	}


  }

}

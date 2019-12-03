import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from '../../servico.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { url } from '../../config_url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isCollapsed;
	aux;
  url: string;

  constructor(public router: Router, public servico: ServicoService, private http:HttpClient) {
  
      
      this.aux = this.servico.getAux();
   }

  ngOnInit() {
  

        //this.aux = this.servico.verificar();
  
    
        // this.auxObservable.subscribe((auxData) => {
        //     this.aux = auxData;
        // });

  }


  

   entrar() {
    

    this.router.navigate(['userLogin']);
    

  

  }

  mensagem() {
    alert("Funcionalidade em desenvolvimento.");
  }

  sair() {

    this.servico.setAux(true);
  	localStorage.removeItem('access_token');
    localStorage.removeItem('username');
  	// this.aux = this.servico.setAux(true);
   //  this.aux2 = false;
  	this.router.navigate(['newHomePage']);
  }


}





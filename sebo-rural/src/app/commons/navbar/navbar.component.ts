import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from '../../servico.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isCollapsed;
	aux: boolean;
	auxObservable;

  constructor(public router: Router, private servico: ServicoService) {
    this.auxObservable  = this.servico.getAuxObservable();
    this.isCollapsed = false;
   }

  ngOnInit() {
  	// if (localStorage.getItem('access_token')) {
   //    this.aux = true;
   //  } else {
   //   this.aux = false;
   //  }
    

    //window.console.log(this.value);	

    
        this.auxObservable.subscribe((auxData) => {
            this.aux = auxData;
        });

  }


  

   entrar() {

    // this.aux = true;

  	this.router.navigate(['userLogin']);
  	
  	
    //ao clicar em entrar os access_token só é criado após a submição dos dados e recepção do mesmo pelo servidor

  	 // this.auxObservable.subscribe((auxData) => {
    //         this.aux = auxData;
    //   });
   
  }

  mensagem() {
    alert("Funcionalidade em desenvolvimento.");
  }

  sair() {
  	localStorage.removeItem('access_token');
    localStorage.removeItem('username');
  	this.aux = this.servico.setAux(true);
  	this.router.navigate(['newHomePage']);
  }


}





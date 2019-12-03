import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  aux: boolean	;	

  constructor(private http:HttpClient) {
  	this.aux = true;
   }
 
  getAux() { 
      return this.aux; 
   } 

  setAux(aux: boolean) {
  	this.aux = aux;
  	return aux;
  }
}

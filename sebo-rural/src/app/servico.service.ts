import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  aux: boolean	;	

  constructor() {
  	this.aux = false;
   }

   public getAuxObservable(): any {
     const auxObservable = new Observable(observer => {
           
                observer.next(this.aux);
          
     });

     return auxObservable;
 	}

  getAux() { 
      return this.aux; 
   } 

  setAux(aux: boolean) {
  	this.aux = aux;
  	return aux;
  }
}

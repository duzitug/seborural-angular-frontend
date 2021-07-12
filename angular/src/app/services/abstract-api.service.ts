import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractApiService<T> {

  protected API_URL = 'http://localhost:8080/api/v1/';
  protected responseFormat = '.json';
  protected elementName = '';

  protected http: HttpClient;


   protected constructor(http: HttpClient) {
     this.http = http;
   }

  getAllElements(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL + this.elementName + this.responseFormat).pipe( shareReplay() );
  }

  getElementById(id: number): Observable<T> {
     return this.http.get<T>( this.API_URL + this.elementName +   `/${ id }`   + this.responseFormat ).pipe( shareReplay() );
  }

  // buscar livro por genero
  // buscar livro por curso

}

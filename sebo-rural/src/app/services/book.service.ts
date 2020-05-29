import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Book } from '../models/book.model';

import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BookService {

	httpClient: HttpClient;
	httpHeaders: HttpHeaders;

  constructor(httpClient: HttpClient, httpHeaders: HttpHeaders) {
  	this.httpClient = httpClient;
  	this.httpHeaders = httpHeaders.set('Authorization', localStorage.getItem('access_token'));
   }


   getBookById(id: number): Observable<Book> {
   	
   	return this.httpClient.get<Book>('https://sebo-rural.herokuapp.com/api' + id);
   
   }

   listBooks(): Observable<Book[]> {

   	return this.httpClient.get<Book[]>('https://sebo-rural.herokuapp.com/api/book/bookList', { headers: this.httpHeaders })
   
   }


   test() {
   	return "retornando do método test()";
   }
   









}

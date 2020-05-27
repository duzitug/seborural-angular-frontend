import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Book } from '../models/book.model';



@Injectable({
  providedIn: 'root'
})
export class BookService {

	http: HttpClient;
	httpHeaders: HttpHeaders;

  constructor(http: HttpClient, httpHeaders: HttpHeaders) {
  	this.http = http;
  	//this.httpHeader = httpHeader;
  	this.httpHeaders = httpHeaders.set('Authorization', localStorage.getItem('access_token'));
   }


   getBookById(id: number) : Observable<Book> {
   	
   	return this.http.get<Book>('https://sebo-rural.herokuapp.com/api' + id);
   
   }

   









}

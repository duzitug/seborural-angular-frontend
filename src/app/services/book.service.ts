import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Book} from '../models/book.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractApiService<Book> {

  constructor(http: HttpClient) {
    super(http);
    this.elementName = 'books';
  }

  getAllBooks(): Observable<Book[]> {
    return this.getAllElements();
  }
}

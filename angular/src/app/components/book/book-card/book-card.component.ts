import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'sebo-rural-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  books$: Observable<Book[]> = new Observable<Book[]>();

  imageLink = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_';

  constructor() { }

  ngOnInit(): void {

  }

}

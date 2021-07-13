import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Book } from "../../models/book.model";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'sebo-rural-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]> = new Observable<Book[]>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getAllBooks();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'sebo-rural-book',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  offset = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.books$ = this.bookService.getAllBooks();
    this.getAllBooksWithPagination();
  }

  getMoreBooks(): void {
    this.offset += 10;
    this.getAllBooksWithPagination();
  }

  getAllBooksWithPagination(): void {
    this.bookService.getAllBooksWithPagination(this.offset.toString())
      .subscribe(books => this.books = this.books.concat(books));
  }

}

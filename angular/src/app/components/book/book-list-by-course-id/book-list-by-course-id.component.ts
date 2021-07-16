import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/book.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sebo-rural-list-books-by-course',
  templateUrl: './book-list-by-course-id.component.html',
  styleUrls: ['./book-list-by-course-id.component.css']
})
export class BookListByCourseIdComponent implements OnInit {

  courseId = '';

  books$: Observable<Book[]> = new Observable<Book[]>();

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params.courseId;
    this.books$ = this.bookService.getBooksByCourseId(this.courseId);
  }

}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book.model";
// BreakpointObserver is an Angular service that can be injected in any component
// and provides the isMatched() and observe() methods.
// https://www.techiediaries.com/angular/responsive-image-breakpoints-cdk-breakpointobserver-angular-9-8/

@Component({
  selector: 'sebo-rural-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver
  //   .observe(Breakpoints.Handset)
  //   .pipe(map(
  //     ({matches}) => {
  //       if (matches) {
  //         return [
  //           {title: 'Card 1', cols: 1, rows: 1},
  //           {title: 'Card 2', cols: 1, rows: 1},
  //           {title: 'Card 3', cols: 1, rows: 1},
  //           {title: 'Card 4', cols: 1, rows: 1}
  //         ];
  //       }
  //
  //       return [
  //         {title: 'Card 1', cols: 1, rows: 1},
  //         {title: 'Card 2', cols: 1, rows: 1},
  //         {title: 'Card 3', cols: 1, rows: 1},
  //         {title: 'Card 4', cols: 1, rows: 1}
  //       ];
  //     }
  //   ));

  cards$: Observable<Book[]>;

  constructor(private breakpointObserver: BreakpointObserver, private bookservice: BookService) {
              this.cards$ = this.bookservice.getAllBooks();
              }

  // Por que os cursos não estão sendo listados no template??

  ngOnInit(): void {

  }
}

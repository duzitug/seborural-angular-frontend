import {Component, OnInit} from '@angular/core';
import {CourseService} from './services/course.service';
import {Course} from './models/course.model';
import {Genre} from './models/genre.model';
import {GenreService} from './services/genre.service';
import {StudentService} from './services/student.service';
import {BookService} from './services/book.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'angular11-route';
  courses: Course[] = [];

  genres: Genre[] = [];

  constructor(private courseService: CourseService,
              private genreService: GenreService,
              private studentService: StudentService,
              private bookService: BookService)
              {}

  ngOnInit(): void {

    this.courseService.getAllCourses()
      .subscribe(
        response => { this.courses = response;  window.console.log(this.courses);    }
      );

    this.genreService.getAllGenres()
      .subscribe(resposta => window.console.log(resposta) );

    this.studentService.getAllStudents()
      .subscribe(resposta => window.console.log(resposta) );

    this.bookService.getAllBooks()
      .subscribe(resposta => window.console.log(resposta) );

    this.studentService.getStudentById(2)
      .subscribe(resposta => window.console.log(resposta) );


  }




}

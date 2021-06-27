import {Component, OnInit} from '@angular/core';
import {CourseService} from './services/course.service';
import {Course} from './models/course.model';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  title = 'angular11-route';
  courses: Course[] = [];

  constructor( private courseService: CourseService ) {
  }

  ngOnInit(): void {

    this.courseService.getAllElements()
      .subscribe(
        response => { this.courses.push(response); }
      );

    console.log(this.courses);

  }
}

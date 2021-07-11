import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service";
import {Observable} from "rxjs";
import {Course} from "../../../models/course.model";

@Component({
  selector: 'sebo-rural-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor( private courseService: CourseService ) {
      this.courses$ = courseService.getAllCourses();
  }

  ngOnInit(): void {
  }

}

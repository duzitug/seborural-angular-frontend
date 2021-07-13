import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../models/course.model";
import { Observable } from "rxjs";
import { CourseService } from "../../services/course.service";

@Component({
  selector: 'sebo-rural-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  cursos$: Observable<Course[]> = new Observable<Course[]>();

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.cursos$ = this.courseService.getAllCourses();
  }

}

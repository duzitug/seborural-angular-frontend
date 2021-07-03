import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Course} from '../models/course.model';
import {AbstractApiService} from './abstract-api.service';


@Injectable({providedIn: 'root'})
export class CourseService extends AbstractApiService<Course> {

  constructor(http: HttpClient) {
    super(http);
    this.elementName = 'courses';
  }

  getAllCourses(): Observable<Course[]> {
    return this.getAllElements();
  }
}

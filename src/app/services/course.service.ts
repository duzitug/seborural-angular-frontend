import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Course} from '../models/course.model';
import {AbstractApiService} from './abstract-api.service';


@Injectable({providedIn: 'root'})
export class CourseService extends AbstractApiService<Course> {



  // API_URL = 'http://localhost:8080/api/v1/courses.json';
  // elementName = 'courses';

  // getAllElements(): Observable<Course> {
  //    return this.http.get<Course>(this.API_URL);
  // }

  constructor(http: HttpClient) {
    super(http);
    this.elementName = 'courses';
  }

  getAllCourses(): Observable<Course[]> {
    return this.getAllElements();
  }
}

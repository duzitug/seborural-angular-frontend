import {HttpClient} from '@angular/common/http';

import {ApiCrudInterface} from '../utils/api-crud.interface';
import {Course} from '../models/course.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CourseService implements ApiCrudInterface<Course> {

    API_URL = 'https://psychiatric-compass.000webhostapp.com/api/v1/courses.json';

  constructor(private http: HttpClient) {
  }

  getAllElements(): Observable<Course> {
     return this.http.get<Course>(this.API_URL);
  }
}
// criar classe abstrata de servico

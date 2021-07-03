import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';

import {Student} from '../models/student.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends AbstractApiService<Student> {

  constructor(http: HttpClient) {
    super(http);
    this.elementName = 'students';
  }

  getAllStudents(): Observable<Student[]> {
    return this.getAllElements();
  }

  getStudentById(id: number): Observable<Student> {
    return this.getElementById(id);
  }
}

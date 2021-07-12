import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AbstractApiService} from './abstract-api.service';
import {Genre} from '../models/genre.model';


@Injectable({
  providedIn: 'root'
})
export class GenreService extends AbstractApiService<Genre> {

  constructor(http: HttpClient) {
    super(http);
    this.elementName = 'genres';
  }

  getAllGenres(): Observable<Genre[]> {
    return this.getAllElements();
  }


}

import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../../services/genre.service";
import {Observable} from "rxjs";
import {Genre} from "../../../models/genre.model";

@Component({
  selector: 'sebo-rural-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genres$: Observable<Genre[]>;

  constructor(private genreService: GenreService) {
    this.genres$ = genreService.getAllGenres();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Genre } from "../../models/genre.model";
import { GenreService } from "../../services/genre.service";

@Component({
  selector: 'sebo-rural-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres$: Observable<Genre[]> = new Observable<Genre[]>();

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genres$= this.genreService.getAllGenres();
  }

}

import { NgModule } from '@angular/core';


import { CourseService } from './course.service';
import { BookService } from './book.service';
import { GenreService } from './genre.service';
import { StudentService } from './student.service';

@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    BookService,
    CourseService,
    GenreService,
    StudentService
  ],
  exports: []
})
export class ServicesModule { }

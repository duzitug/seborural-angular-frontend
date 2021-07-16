import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/shared/footer/footer.component';
import { CourseComponent } from './components/course/course.component';
import { BookListComponent } from './components/book/book-list.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookListByCourseIdComponent } from './components/book/book-list-by-course-id/book-list-by-course-id.component';

const routes: Routes = [
   {path: '', component: BookListComponent},
   {path: 'cursos', component: CourseComponent},
   {path: 'livros', component: BookListComponent},
   {path: 'livros/:courseId', component: BookListByCourseIdComponent},
   {path: 'generos', component: GenreComponent},
   {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

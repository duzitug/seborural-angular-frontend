import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { CourseComponent } from "./components/course/course.component";
import { BookComponent } from "./components/book/book.component";
import { GenreComponent } from "./components/genre/genre.component";

const routes: Routes = [
   {path: '', component: BookComponent},
   {path: 'cursos', component: CourseComponent},
   {path: 'livros', component: BookComponent},
   {path: 'generos', component: GenreComponent},
   {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

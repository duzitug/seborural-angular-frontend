import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CourseListComponent } from "./components/course/course-list/course-list.component";
import { GenreListComponent } from "./components/genre/genre-list/genre-list.component";

const routes: Routes = [
   {path: '', component: DashboardComponent},
   {path: 'cursos', component: CourseListComponent},
   {path: 'generos', component: GenreListComponent},
   {path: 'estudantes', component: DashboardComponent},
   {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

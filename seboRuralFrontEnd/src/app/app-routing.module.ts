import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from "./create-book/create-book.component";
import {  CreateStudentComponent} from "./create-student/create-student.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './home-page/main/main.component';

const routes: Routes = [
  {
    path: 'createStudent',
    component: CreateStudentComponent
  },
  {
    path: 'createBook',
    component: CreateBookComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  { path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

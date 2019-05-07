import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from "./create-book/create-book.component";
import {  CreateStudentComponent} from "./create-student/create-student.component";

const routes: Routes = [
  {
    path: 'createStudent',
    component: CreateStudentComponent
  },
  {
    path: 'createBook',
    component: CreateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

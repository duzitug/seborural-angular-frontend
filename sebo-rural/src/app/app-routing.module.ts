import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListBookComponent } from './list-book/list-book.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: 'createStudent',
    component: CreateUserComponent
  },
  {
    path: 'createBook',
    component: CreateBookComponent
  },
  {
    path: 'home',
    component: MainBooksViewComponent
  },
  {
    path: 'listBook',
    component: ListBookComponent
  },
  {
    path: 'fileUpload',
    component: FileUploadComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: '404',
  //   component: PageNotFoundComponent
  // },
  { path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

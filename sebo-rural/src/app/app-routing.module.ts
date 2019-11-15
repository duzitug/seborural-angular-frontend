import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NewHomepageComponent } from './new-homepage/new-homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ShowBooksByStudentComponent } from './show-books-by-student/show-books-by-student.component'


const routes: Routes = [
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'userLogin',
    component: UserLoginComponent
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
    path: 'newHomePage',
    component: NewHomepageComponent
  },
  {
    path: 'bookDetails',
    component: BookDetailsComponent
  },
  {
    path: 'showBooksByStudentComponent',
    component: ShowBooksByStudentComponent
  },
  {
    path: '',
    redirectTo: '/newHomePage',
    pathMatch: 'full'
  },
  // {
  //   path: '404',
  //   component: PageNotFoundComponent
  // },
  { path: '**',
    redirectTo: '/newHomePage'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

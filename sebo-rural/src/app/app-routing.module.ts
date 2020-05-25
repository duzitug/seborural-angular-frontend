import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importação dos components
import { MainBooksViewComponent } from './components/commons/main-books-view/main-books-view.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListBookComponent } from './components/book/list-book/list-book.component';

import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { ShowBooksByStudentComponent } from './components/book/show-books-by-student/show-books-by-student.component'
import { EditBookComponent } from './components/book/edit-book/edit-book.component'
import { OwnBookDetailsComponent } from './components/book/own-book-details/own-book-details.component'

import { ChooseBookTypeComponent } from './components/book/choose-book-type/choose-book-type.component';
import { CreateBookLiteraryComponent } from './components/book/create-book-literary/create-book-literary.component';
import { ShowBooksLiteraryByStudentComponent } from './components/book/show-books-literary-by-student/show-books-literary-by-student.component';
import { ChooseOwnBookTypeComponent } from './components/book/choose-own-book-type/choose-own-book-type.component';
import { OwnBookLiteraryDetailsComponent } from './components/book/own-book-literary-details/own-book-literary-details.component';
import { EditBookLiteraryComponent } from './components/book/edit-book-literary/edit-book-literary.component';

import { NewHomepageComponent } from './components/new-homepage/new-homepage.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { EmailPasswordRecoveryComponent } from './components/email-password-recovery/email-password-recovery.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

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
    path: 'showBooksByStudent',
    component: ShowBooksByStudentComponent
  },
  {
    path: 'editBook',
    component: EditBookComponent
  },
  {
    path: 'ownBookDetails',
    component: OwnBookDetailsComponent
  },
  {
    path: 'emailPasswordRecovery',
    component: EmailPasswordRecoveryComponent
  },
  {
    path: 'passwordRecovery/:id',
    component: PasswordRecoveryComponent
  },
  {
    path: 'chooseBookType',
    component: ChooseBookTypeComponent
  }, 
  {
    path: 'createBookLiterary',
    component: CreateBookLiteraryComponent
  },
  {
    path: 'showBooksLiteraryByStudentComponent',
    component: ShowBooksLiteraryByStudentComponent
  },
  {
    path: 'chooseOwnBookTypeComponent',
    component: ChooseOwnBookTypeComponent
  },
  {
    path: 'ownBookLiteraryDetailsComponent',
    component: OwnBookLiteraryDetailsComponent
  },
  {
    path: 'editBookLiteraryComponent',
    component: EditBookLiteraryComponent
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

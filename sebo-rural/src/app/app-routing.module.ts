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
import { EditBookComponent } from './edit-book/edit-book.component'
import { OwnBookDetailsComponent } from './own-book-details/own-book-details.component'
import { EmailPasswordRecoveryComponent } from './email-password-recovery/email-password-recovery.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ChooseBookTypeComponent } from './choose-book-type/choose-book-type.component';
import { CreateBookLiteraryComponent } from './create-book-literary/create-book-literary.component';

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ! ngx-bootstrap

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

//importação de components

import { AppComponent } from './app.component';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { PageNotFoundComponent } from './components/commons/page-not-found/page-not-found.component';
import { NewHomepageComponent } from './components/new-homepage/new-homepage.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

//components relacionados a entidade Book
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { ListBookComponent } from './components/book/list-book/list-book.component';
import { MainBooksViewComponent } from './components/commons/main-books-view/main-books-view.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { ShowBooksByStudentComponent } from './components/book/show-books-by-student/show-books-by-student.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { OwnBookDetailsComponent } from './components/book/own-book-details/own-book-details.component';
import { ChooseBookTypeComponent } from './components/book/choose-book-type/choose-book-type.component';
import { CreateBookLiteraryComponent } from './components/book/create-book-literary/create-book-literary.component';
import { ChooseOwnBookTypeComponent } from './components/book/choose-own-book-type/choose-own-book-type.component';
import { ShowBooksLiteraryByStudentComponent } from './components/book/show-books-literary-by-student/show-books-literary-by-student.component';
import { OwnBookLiteraryDetailsComponent } from './components/book/own-book-literary-details/own-book-literary-details.component';
import { EditBookLiteraryComponent } from './components/book/edit-book-literary/edit-book-literary.component';


import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicoService } from './servico.service';

import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { EmailPasswordRecoveryComponent } from './components/email-password-recovery/email-password-recovery.component';






@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateBookComponent,
    ListBookComponent,
    NavbarComponent,
    FooterComponent,
    MainBooksViewComponent,
    PageNotFoundComponent,
    NewHomepageComponent,
    UserLoginComponent,
    BookDetailsComponent,
    ShowBooksByStudentComponent,
    EditBookComponent,
    OwnBookDetailsComponent,
    PasswordRecoveryComponent,
    EmailPasswordRecoveryComponent,
    ChooseBookTypeComponent,
    CreateBookLiteraryComponent,
    ChooseOwnBookTypeComponent,
    ShowBooksLiteraryByStudentComponent,
    OwnBookLiteraryDetailsComponent,
    EditBookLiteraryComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    NgxCaptchaModule,
    RouterModule,
    NgbCollapseModule,
    NgbPaginationModule,
    NgbPaginationModule
  ],
  providers: [ServicoService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ! ngx-bootstrap

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { NewHomepageComponent } from './new-homepage/new-homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

import { ServicoService } from './servico.service';
import { ShowBooksByStudentComponent } from './show-books-by-student/show-books-by-student.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { OwnBookDetailsComponent } from './own-book-details/own-book-details.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




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
    OwnBookDetailsComponent
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
    NgbPaginationModule
  ],
  providers: [ServicoService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

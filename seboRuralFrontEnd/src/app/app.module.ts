import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    CreateStudentComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

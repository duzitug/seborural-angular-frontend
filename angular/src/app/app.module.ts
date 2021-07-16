import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';



import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { CourseComponent } from './components/course/course.component';
import { BookListComponent } from './components/book/book-list.component';
import { GenreComponent } from './components/genre/genre.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookListByCourseIdComponent } from './components/book/book-list-by-course-id/book-list-by-course-id.component';
import { BookCardComponent } from './components/book/book-card/book-card.component';
import { ButtonLoadComponent } from './components/book/button-load/button-load.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    CourseComponent,
    BookListComponent,
    GenreComponent,
    BookListByCourseIdComponent,
    BookCardComponent,
    ButtonLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

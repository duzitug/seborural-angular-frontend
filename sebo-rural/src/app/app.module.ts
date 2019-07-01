import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateBookComponent,
    ListBookComponent,
    NavbarComponent,
    FooterComponent,
    MainBooksViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

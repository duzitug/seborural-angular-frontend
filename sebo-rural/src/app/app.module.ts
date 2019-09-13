import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//! INÌCIO imports do angularFire

import { firebaseConfig } from '../environments/environment';

//! FIM imports do angularFire

// ! ngx-bootstrap

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


//Angular 2 module to resize images down to a certain width and height or to reduce the quality to fit a certain maximal filesize - all in the browser.
import { Ng2ImgMaxModule } from 'ng2-img-max';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { PhotoAlbum } from './model/photo-album.service';
import { NewHomepageComponent } from './new-homepage/new-homepage.component';



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
    NewHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [PhotoAlbum],
  bootstrap: [AppComponent]
})
export class AppModule { }

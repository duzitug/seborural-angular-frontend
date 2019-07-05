import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// File upload module
import {FileUploadModule} from 'ng2-file-upload';
// Cloudinary module
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
//cloudnary config file
import cloudinaryConfiguration from './config';

import * as cloudinary from 'cloudinary-core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainBooksViewComponent } from './commons/main-books-view/main-books-view.component';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



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
    FileUploadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

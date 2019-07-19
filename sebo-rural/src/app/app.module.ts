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

//An Angular component which reads the dataURL and optionally resizes the selected input file image.
import { ImageToDataUrlModule } from "ngx-image2dataurl";

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
import { PhotoListComponent } from './photo-list/photo-list.component';
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
    FileUploadComponent,
    PhotoListComponent,
    NewHomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    FileUploadModule,
    ImageToDataUrlModule
  ],
  providers: [PhotoAlbum],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { CourseComponent } from './components/course/course.component';
import { BookComponent } from './components/book/book.component';
import { GenreComponent } from './components/genre/genre.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    CourseComponent,
    BookComponent,
    GenreComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

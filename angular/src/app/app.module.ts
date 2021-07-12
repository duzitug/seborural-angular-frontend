import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    CourseListComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

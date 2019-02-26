import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-book-list></app-book-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'seboRuralFrontEnd';
}

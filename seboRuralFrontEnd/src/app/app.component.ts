import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-book-list></app-book-list>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'seboRuralFrontEnd';
}

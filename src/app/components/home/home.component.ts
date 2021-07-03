import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sebo-rural-home',
  template: '<sebo-rural-navbar></sebo-rural-navbar> ' +
            '<sebo-rural-main-content></sebo-rural-main-content> ' +
            '<sebo-rural-footer></sebo-rural-footer>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

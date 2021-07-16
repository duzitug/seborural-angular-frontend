import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sebo-rural-button-load',
  templateUrl: './button-load.component.html',
  styleUrls: ['./button-load.component.css']
})
export class ButtonLoadComponent implements OnInit {

  @Input()
  hasMore = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBooksViewComponent } from './main-books-view.component';

describe('MainBooksViewComponent', () => {
  let component: MainBooksViewComponent;
  let fixture: ComponentFixture<MainBooksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBooksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBooksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksByStudentComponent } from './show-books-by-student.component';

describe('ShowBooksByStudentComponent', () => {
  let component: ShowBooksByStudentComponent;
  let fixture: ComponentFixture<ShowBooksByStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBooksByStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBooksByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

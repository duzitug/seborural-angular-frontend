import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksLiteraryByStudentComponent } from './show-books-literary-by-student.component';

describe('ShowBooksLiteraryByStudentComponent', () => {
  let component: ShowBooksLiteraryByStudentComponent;
  let fixture: ComponentFixture<ShowBooksLiteraryByStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBooksLiteraryByStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBooksLiteraryByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookLiteraryComponent } from './create-book-literary.component';

describe('CreateBookLiteraryComponent', () => {
  let component: CreateBookLiteraryComponent;
  let fixture: ComponentFixture<CreateBookLiteraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookLiteraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookLiteraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

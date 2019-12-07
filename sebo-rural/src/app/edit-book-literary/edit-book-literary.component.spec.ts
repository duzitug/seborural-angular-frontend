import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookLiteraryComponent } from './edit-book-literary.component';

describe('EditBookLiteraryComponent', () => {
  let component: EditBookLiteraryComponent;
  let fixture: ComponentFixture<EditBookLiteraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookLiteraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookLiteraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

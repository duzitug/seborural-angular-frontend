import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookFirebaseComponent } from './create-book-firebase.component';

describe('CreateBookFirebaseComponent', () => {
  let component: CreateBookFirebaseComponent;
  let fixture: ComponentFixture<CreateBookFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

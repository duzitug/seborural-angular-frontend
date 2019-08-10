import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookAngularFireComponent } from './create-book-angular-fire.component';

describe('CreateBookAngularFireComponent', () => {
  let component: CreateBookAngularFireComponent;
  let fixture: ComponentFixture<CreateBookAngularFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookAngularFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookAngularFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

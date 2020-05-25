import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnBookDetailsComponent } from './own-book-details.component';

describe('OwnBookDetailsComponent', () => {
  let component: OwnBookDetailsComponent;
  let fixture: ComponentFixture<OwnBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

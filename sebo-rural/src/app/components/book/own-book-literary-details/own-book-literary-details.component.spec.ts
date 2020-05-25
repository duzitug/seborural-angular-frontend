import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnBookLiteraryDetailsComponent } from './own-book-literary-details.component';

describe('OwnBookLiteraryDetailsComponent', () => {
  let component: OwnBookLiteraryDetailsComponent;
  let fixture: ComponentFixture<OwnBookLiteraryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnBookLiteraryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnBookLiteraryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

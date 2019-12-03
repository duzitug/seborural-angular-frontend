import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBookTypeComponent } from './choose-book-type.component';

describe('ChooseBookTypeComponent', () => {
  let component: ChooseBookTypeComponent;
  let fixture: ComponentFixture<ChooseBookTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBookTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBookTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

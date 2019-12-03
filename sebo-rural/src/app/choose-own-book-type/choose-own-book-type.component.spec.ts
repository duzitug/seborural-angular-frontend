import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOwnBookTypeComponent } from './choose-own-book-type.component';

describe('ChooseOwnBookTypeComponent', () => {
  let component: ChooseOwnBookTypeComponent;
  let fixture: ComponentFixture<ChooseOwnBookTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseOwnBookTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOwnBookTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

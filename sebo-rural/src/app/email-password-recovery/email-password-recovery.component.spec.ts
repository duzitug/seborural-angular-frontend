import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPasswordRecoveryComponent } from './email-password-recovery.component';

describe('EmailPasswordRecoveryComponent', () => {
  let component: EmailPasswordRecoveryComponent;
  let fixture: ComponentFixture<EmailPasswordRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPasswordRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

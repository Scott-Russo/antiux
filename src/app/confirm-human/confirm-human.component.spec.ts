import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHumanComponent } from './confirm-human.component';

describe('ConfirmHumanComponent', () => {
  let component: ConfirmHumanComponent;
  let fixture: ComponentFixture<ConfirmHumanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmHumanComponent]
    });
    fixture = TestBed.createComponent(ConfirmHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiMeterComponent } from './bmi-meter.component';

describe('BmiMeterComponent', () => {
  let component: BmiMeterComponent;
  let fixture: ComponentFixture<BmiMeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiMeterComponent]
    });
    fixture = TestBed.createComponent(BmiMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

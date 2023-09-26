import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeBtnComponent } from './compute-btn.component';

describe('ComputeBtnComponent', () => {
  let component: ComputeBtnComponent;
  let fixture: ComponentFixture<ComputeBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputeBtnComponent]
    });
    fixture = TestBed.createComponent(ComputeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

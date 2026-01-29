import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureComponent } from './pressure.component';

describe('Pressure', () => {
  let component: PressureComponent;
  let fixture: ComponentFixture<PressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PressureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponent } from './temperature.component';

describe('Temperature', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

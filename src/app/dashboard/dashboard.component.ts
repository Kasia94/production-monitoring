import { Component } from '@angular/core';
import { TemperatureComponent } from '../temperature/temperature.component';
import { PressureComponent } from '../pressure/pressure.component';

@Component({
  selector: 'app-dashboard',
  imports: [TemperatureComponent, PressureComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {}

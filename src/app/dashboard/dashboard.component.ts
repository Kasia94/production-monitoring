import { Component, inject, signal } from '@angular/core';
import { TemperatureComponent } from '../temperature/temperature.component';
import { PressureComponent } from '../pressure/pressure.component';
import { Measures } from '../models/measures.model';
import { MeasuresService } from '../services/measure.service';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [TemperatureComponent, PressureComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  private measuresService = inject(MeasuresService);
  temperature = signal<Measures | null>(null);
  pressure = signal<Measures | null>(null);

  temperatureHistory = signal<Measures[]>([]);
  pressureHistory = signal<Measures[]>([]);

  constructor() {
    this.measuresService.getMeasures().subscribe((measures) => {
      const temp = measures.find((m) => m.name === 'Temperatura');
      const press = measures.find((m) => m.name === 'Ciśnienie');

      if (!temp || !press) return;

      this.temperature.set(temp);
      this.pressure.set(press);

      this.temperatureHistory.update((h) => [...h.slice(-19), temp]);
      this.pressureHistory.update((h) => [...h.slice(-19), press]);
    });
  }
}

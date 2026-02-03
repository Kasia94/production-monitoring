import { Injectable, signal } from '@angular/core';
import { Measures } from './models/measures.model';

@Injectable({ providedIn: 'root' })
export class MeasuresStore {
  temperature = signal<Measures | null>(null);
  pressure = signal<Measures | null>(null);

  temperatureHistory = signal<Measures[]>([]);
  pressureHistory = signal<Measures[]>([]);

  update(temp: Measures, press: Measures) {
    this.temperature.set(temp);
    this.pressure.set(press);

    this.temperatureHistory.update((h) => [...h.slice(-19), temp]);
    this.pressureHistory.update((h) => [...h.slice(-19), press]);
  }

  getAllHistory(): Measures[] {
    return [...this.temperatureHistory(), ...this.pressureHistory()].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date),
    );
  }
}

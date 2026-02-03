import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MeasuresService } from '../services/measure.service';

import { TemperatureComponent } from '../temperature/temperature.component';
import { PressureComponent } from '../pressure/pressure.component';
import { ChartComponent } from './chart/chart.component';
import { MeasuresStore } from '../measures.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TemperatureComponent, PressureComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent implements AfterViewInit {
  private measuresService = inject(MeasuresService);
  readonly store = inject(MeasuresStore);

  @ViewChild('vueTable', { static: true }) vueTable!: ElementRef<any>;

  constructor() {
    this.measuresService.getMeasures().subscribe((measures) => {
      const temp = measures.find((m) => m.name === 'Temperatura');
      const press = measures.find((m) => m.name === 'Ciśnienie');

      if (!temp || !press) return;

      this.store.update(temp, press);

      this.pushToVue();
    });
  }
  ngAfterViewInit() {
    this.pushToVue();
  }

  private pushToVue() {
    if (!this.vueTable?.nativeElement) return;

    this.vueTable.nativeElement.measures = this.store.getAllHistory();
  }
}

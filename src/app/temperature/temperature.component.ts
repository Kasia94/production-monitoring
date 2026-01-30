import { Component, Input } from '@angular/core';
import { Measures } from '../models/measures.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.css',
})
export class TemperatureComponent {
  @Input() measure!: Measures | null;
}

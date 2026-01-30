import { Component, Input } from '@angular/core';
import { Measures } from '../models/measures.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pressure',
  imports: [DatePipe],
  templateUrl: './pressure.component.html',
  styleUrl: './pressure.css',
})
export class PressureComponent {
  @Input() measure!: Measures | null;
}

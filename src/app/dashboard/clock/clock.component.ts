import { DatePipe } from '@angular/common';
import { Component, signal, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [DatePipe],
  standalone: true,
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnDestroy {
  currentTime = signal(new Date());

  private timer = setInterval(() => {
    this.currentTime.set(new Date());
  }, 1000);

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

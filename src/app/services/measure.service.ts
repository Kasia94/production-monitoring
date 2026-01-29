import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { Measures } from '../models/measures.model';

@Injectable({
  providedIn: 'root',
})
export class MeasuresService {
  getMeasures(): Observable<Measures[]> {
    return interval(10000).pipe(
      map(() => {
        const now = new Date().toISOString();

        return [
          {
            name: 'Ciśnienie',
            value: this.random(980, 1050),
            date: now,
          },
          {
            name: 'Temperatura',
            value: this.random(18, 38),
            date: now,
          },
        ];
      }),
    );
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

import { TestBed } from '@angular/core/testing';

import { MeasuresService } from './measure.service';

describe('Measure', () => {
  let service: MeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

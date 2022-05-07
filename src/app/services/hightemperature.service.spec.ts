import { TestBed } from '@angular/core/testing';

import { HightemperatureService } from './hightemperature.service';

describe('HightemperatureService', () => {
  let service: HightemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HightemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

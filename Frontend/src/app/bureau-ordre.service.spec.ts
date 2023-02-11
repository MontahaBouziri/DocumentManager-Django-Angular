import { TestBed } from '@angular/core/testing';

import { BureauOrdreService } from './bureau-ordre.service';

describe('BureauOrdreService', () => {
  let service: BureauOrdreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BureauOrdreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

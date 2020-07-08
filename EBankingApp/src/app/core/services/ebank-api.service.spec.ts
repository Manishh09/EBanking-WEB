import { TestBed } from '@angular/core/testing';

import { EbankApiService } from './ebank-api.service';

describe('EbankApiService', () => {
  let service: EbankApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbankApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

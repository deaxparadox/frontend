import { TestBed } from '@angular/core/testing';

import { PmsHttpService } from './pms-http.service';

describe('PmsHttpService', () => {
  let service: PmsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

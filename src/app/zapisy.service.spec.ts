import { TestBed } from '@angular/core/testing';

import { ZapisyService } from './zapisy.service';

describe('ZapisyService', () => {
  let service: ZapisyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZapisyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

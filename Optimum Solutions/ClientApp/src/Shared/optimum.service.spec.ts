import { TestBed } from '@angular/core/testing';

import { OptimumService } from './optimum.service';

describe('OptimumService', () => {
  let service: OptimumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

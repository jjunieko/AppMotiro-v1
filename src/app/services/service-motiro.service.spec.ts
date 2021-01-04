import { TestBed } from '@angular/core/testing';

import { ServiceMotiroService } from './service-motiro.service';

describe('ServiceMotiroService', () => {
  let service: ServiceMotiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMotiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

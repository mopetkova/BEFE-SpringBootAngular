import { TestBed, inject } from '@angular/core/testing';

import { MaritalStatusService } from './maritalStatus.service';

describe('MaritalStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaritalStatusService]
    });
  });

  it('should be created', inject([MaritalStatusService], (service: MaritalStatusService) => {
    expect(service).toBeTruthy();
  }));
});

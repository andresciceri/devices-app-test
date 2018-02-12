import { TestBed, inject } from '@angular/core/testing';

import { DevicesListService } from './devices-list.service';

describe('DevicesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesListService]
    });
  });

  it('should be created', inject([DevicesListService], (service: DevicesListService) => {
    expect(service).toBeTruthy();
  }));
});

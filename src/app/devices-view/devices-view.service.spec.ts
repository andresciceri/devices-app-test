import { TestBed, inject } from '@angular/core/testing';

import { DevicesViewService } from './devices-view.service';

describe('DevicesViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesViewService]
    });
  });

  it('should be created', inject([DevicesViewService], (service: DevicesViewService) => {
    expect(service).toBeTruthy();
  }));
});

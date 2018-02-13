import { TestBed, inject } from '@angular/core/testing';

import { ProfileUserService } from './profile-user.service';

describe('ProfileUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUserService]
    });
  });

  it('should be created', inject([ProfileUserService], (service: ProfileUserService) => {
    expect(service).toBeTruthy();
  }));
});

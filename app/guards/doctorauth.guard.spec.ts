import { TestBed } from '@angular/core/testing';

import { doctorauth } from './doctorauth.guard';

describe('DoctorauthGuard', () => {
  let guard: doctorauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(doctorauth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

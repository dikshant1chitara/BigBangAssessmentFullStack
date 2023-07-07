import { TestBed } from '@angular/core/testing';

import { patientauth } from './patientauth.guard';

describe('PatientauthGuard', () => {
  let guard: patientauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(patientauth);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

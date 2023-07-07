import { TestBed } from '@angular/core/testing';

import { PatienttokenInterceptor } from './patienttoken.interceptor';

describe('PatienttokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PatienttokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PatienttokenInterceptor = TestBed.inject(PatienttokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

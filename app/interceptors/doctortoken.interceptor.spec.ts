import { TestBed } from '@angular/core/testing';

import { DoctortokenInterceptor } from './doctortoken.interceptor';

describe('DoctortokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DoctortokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DoctortokenInterceptor = TestBed.inject(DoctortokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

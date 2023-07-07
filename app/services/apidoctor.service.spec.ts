import { TestBed } from '@angular/core/testing';

import { ApidoctorService } from './apidoctor.service';

describe('ApidoctorService', () => {
  let service: ApidoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

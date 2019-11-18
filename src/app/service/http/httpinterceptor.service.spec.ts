import { TestBed } from '@angular/core/testing';

import { HttpinterceptorService } from './httpinterceptor.service';

describe('HttpinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterceptorService = TestBed.get(HttpinterceptorService);
    expect(service).toBeTruthy();
  });
});

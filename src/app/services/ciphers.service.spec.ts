import { TestBed } from '@angular/core/testing';

import { CiphersService } from './ciphers.service';

describe('CiphersService', () => {
  let service: CiphersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiphersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

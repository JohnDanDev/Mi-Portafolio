import { TestBed } from '@angular/core/testing';

import { AwtService } from './awt.service';

describe('AwtService', () => {
  let service: AwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

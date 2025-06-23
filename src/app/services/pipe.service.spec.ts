import { TestBed } from '@angular/core/testing';

import { PipeService } from './pipe.service';

describe('PipeService', () => {
  let service: PipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

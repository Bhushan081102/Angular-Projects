import { TestBed } from '@angular/core/testing';

import { TuneRepositoryService } from './tune-repository.service';

describe('TuneRepositoryService', () => {
  let service: TuneRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuneRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

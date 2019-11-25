import { TestBed } from '@angular/core/testing';

import { ResidencesService } from './residences.service';

describe('ResidencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidencesService = TestBed.get(ResidencesService);
    expect(service).toBeTruthy();
  });
});

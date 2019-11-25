import { TestBed } from '@angular/core/testing';

import { PartieCommunesService } from './partie-communes.service';

describe('PartieCommunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartieCommunesService = TestBed.get(PartieCommunesService);
    expect(service).toBeTruthy();
  });
});

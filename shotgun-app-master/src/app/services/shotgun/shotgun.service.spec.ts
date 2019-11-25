import { TestBed } from '@angular/core/testing';

import { ShotgunService } from './shotgun.service';

describe('ShotgunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShotgunService = TestBed.get(ShotgunService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FormPosterService } from './form-poster.service';

describe('FormPosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPosterService = TestBed.get(FormPosterService);
    expect(service).toBeTruthy();
  });
});

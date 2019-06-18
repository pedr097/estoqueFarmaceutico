import { TestBed } from '@angular/core/testing';

import { Produto3Service } from './produto3.service';

describe('Produto3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Produto3Service = TestBed.get(Produto3Service);
    expect(service).toBeTruthy();
  });
});

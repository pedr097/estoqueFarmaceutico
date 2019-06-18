import { TestBed } from '@angular/core/testing';

import { Produto2Service } from './produto2.service';

describe('Produto2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Produto2Service = TestBed.get(Produto2Service);
    expect(service).toBeTruthy();
  });
});

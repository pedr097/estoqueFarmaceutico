import { TestBed } from '@angular/core/testing';

import { MateriaPrimaService } from './materia-prima.service';

describe('MateriaPrimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaPrimaService = TestBed.get(MateriaPrimaService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ExperienciasService } from './experiencias.service';

describe('ExperienciasService', () => {
  let service: ExperienciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia retornar todo', () => {
    expect(service.getAll());
  });
});

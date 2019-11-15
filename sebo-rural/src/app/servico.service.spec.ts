import { TestBed } from '@angular/core/testing';

import { ServicoService } from './servico.service';

describe('ServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoService = TestBed.get(ServicoService);
    expect(service).toBeTruthy();
  });
});

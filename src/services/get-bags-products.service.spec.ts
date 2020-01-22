import { TestBed } from '@angular/core/testing';

import { GetBagsProductsService } from './get-bags-products.service';

describe('GetBagsProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBagsProductsService = TestBed.get(GetBagsProductsService);
    expect(service).toBeTruthy();
  });
});

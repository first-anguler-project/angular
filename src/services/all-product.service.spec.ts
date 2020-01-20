import { TestBed } from '@angular/core/testing';

import { AllProductService } from './all-product.service';

describe('AllProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllProductService = TestBed.get(AllProductService);
    expect(service).toBeTruthy();
  });
});

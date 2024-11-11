import { TestBed } from '@angular/core/testing';

import { ShopingFormService } from './shoping-form.service';

describe('ShopingFormService', () => {
  let service: ShopingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { NodeExpressService } from './node-express.service';

describe('NodeExpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeExpressService]
    });
  });

  it('should be created', inject([NodeExpressService], (service: NodeExpressService) => {
    expect(service).toBeTruthy();
  }));
});

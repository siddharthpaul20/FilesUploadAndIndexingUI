import { TestBed } from '@angular/core/testing';

import { ShowTokenInputService } from './show-token-input.service';

describe('ShowTokenInputService', () => {
  let service: ShowTokenInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTokenInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

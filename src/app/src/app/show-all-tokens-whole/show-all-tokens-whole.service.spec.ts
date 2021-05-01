import { TestBed } from '@angular/core/testing';

import { ShowAllTokensWholeService } from './show-all-tokens-whole.service';

describe('ShowAllTokensWholeService', () => {
  let service: ShowAllTokensWholeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAllTokensWholeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

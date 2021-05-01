import { TestBed } from '@angular/core/testing';

import { SearchAKeywordInCompleteService } from './search-a-keyword-in-complete.service';

describe('SearchAKeywordInCompleteService', () => {
  let service: SearchAKeywordInCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAKeywordInCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ShowDirectoryThatAreAlreadyIndexedService } from './show-directory-that-are-already-indexed.service';

describe('ShowDirectoryThatAreAlreadyIndexedService', () => {
  let service: ShowDirectoryThatAreAlreadyIndexedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDirectoryThatAreAlreadyIndexedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ContentViewerService } from './content-viewer.service';

describe('ContentViewerService', () => {
  let service: ContentViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

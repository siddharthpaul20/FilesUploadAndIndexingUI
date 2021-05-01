import { TestBed } from '@angular/core/testing';

import { ShowFileStatsService } from './show-file-stats.service';

describe('ShowFileStatsService', () => {
  let service: ShowFileStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFileStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

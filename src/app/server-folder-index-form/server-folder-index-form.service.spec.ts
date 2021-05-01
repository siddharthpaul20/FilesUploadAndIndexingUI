import { TestBed } from '@angular/core/testing';

import { ServerFolderIndexFormService } from './server-folder-index-form.service';

describe('ServerFolderIndexFormService', () => {
  let service: ServerFolderIndexFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerFolderIndexFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

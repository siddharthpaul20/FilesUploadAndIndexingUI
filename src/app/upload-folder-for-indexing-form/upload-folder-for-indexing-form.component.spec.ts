import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFolderForIndexingFormComponent } from './upload-folder-for-indexing-form.component';

describe('UploadFolderForIndexingFormComponent', () => {
  let component: UploadFolderForIndexingFormComponent;
  let fixture: ComponentFixture<UploadFolderForIndexingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFolderForIndexingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFolderForIndexingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMultipleFilesFormComponent } from './upload-multiple-files-form.component';

describe('UploadMultipleFilesFormComponent', () => {
  let component: UploadMultipleFilesFormComponent;
  let fixture: ComponentFixture<UploadMultipleFilesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMultipleFilesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMultipleFilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

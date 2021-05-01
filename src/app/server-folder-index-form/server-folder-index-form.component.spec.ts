import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFolderIndexFormComponent } from './server-folder-index-form.component';

describe('ServerFolderIndexFormComponent', () => {
  let component: ServerFolderIndexFormComponent;
  let fixture: ComponentFixture<ServerFolderIndexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerFolderIndexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerFolderIndexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

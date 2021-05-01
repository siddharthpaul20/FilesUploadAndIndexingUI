import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFileFolderSpecificComponent } from './search-file-folder-specific.component';

describe('SearchFileFolderSpecificComponent', () => {
  let component: SearchFileFolderSpecificComponent;
  let fixture: ComponentFixture<SearchFileFolderSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFileFolderSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFileFolderSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

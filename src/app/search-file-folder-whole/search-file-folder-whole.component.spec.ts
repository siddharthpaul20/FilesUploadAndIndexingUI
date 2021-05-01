import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFileFolderWholeComponent } from './search-file-folder-whole.component';

describe('SearchFileFolderWholeComponent', () => {
  let component: SearchFileFolderWholeComponent;
  let fixture: ComponentFixture<SearchFileFolderWholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFileFolderWholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFileFolderWholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

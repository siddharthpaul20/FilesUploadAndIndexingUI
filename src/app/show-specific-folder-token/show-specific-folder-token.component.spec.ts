import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificFolderTokenComponent } from './show-specific-folder-token.component';

describe('ShowSpecificFolderTokenComponent', () => {
  let component: ShowSpecificFolderTokenComponent;
  let fixture: ComponentFixture<ShowSpecificFolderTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecificFolderTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificFolderTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

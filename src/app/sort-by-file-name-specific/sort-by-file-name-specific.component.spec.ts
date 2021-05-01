import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByFileNameSpecificComponent } from './sort-by-file-name-specific.component';

describe('SortByFileNameSpecificComponent', () => {
  let component: SortByFileNameSpecificComponent;
  let fixture: ComponentFixture<SortByFileNameSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByFileNameSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByFileNameSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

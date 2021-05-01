import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByLastModifiedDateSpecificComponent } from './sort-by-last-modified-date-specific.component';

describe('SortByLastModifiedDateSpecificComponent', () => {
  let component: SortByLastModifiedDateSpecificComponent;
  let fixture: ComponentFixture<SortByLastModifiedDateSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByLastModifiedDateSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByLastModifiedDateSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

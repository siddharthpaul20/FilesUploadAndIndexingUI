import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByCreationDateSpecificComponent } from './sort-by-creation-date-specific.component';

describe('SortByCreationDateSpecificComponent', () => {
  let component: SortByCreationDateSpecificComponent;
  let fixture: ComponentFixture<SortByCreationDateSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByCreationDateSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByCreationDateSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

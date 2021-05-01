import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByFileSizeSpecificComponent } from './sort-by-file-size-specific.component';

describe('SortByFileSizeSpecificComponent', () => {
  let component: SortByFileSizeSpecificComponent;
  let fixture: ComponentFixture<SortByFileSizeSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByFileSizeSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByFileSizeSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

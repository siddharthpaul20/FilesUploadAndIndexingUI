import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAKeywordInCompleteComponent } from './search-a-keyword-in-complete.component';

describe('SearchAKeywordInCompleteComponent', () => {
  let component: SearchAKeywordInCompleteComponent;
  let fixture: ComponentFixture<SearchAKeywordInCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAKeywordInCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAKeywordInCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

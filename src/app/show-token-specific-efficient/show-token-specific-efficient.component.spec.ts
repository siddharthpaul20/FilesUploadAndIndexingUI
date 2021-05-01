import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTokenSpecificEfficientComponent } from './show-token-specific-efficient.component';

describe('ShowTokenSpecificEfficientComponent', () => {
  let component: ShowTokenSpecificEfficientComponent;
  let fixture: ComponentFixture<ShowTokenSpecificEfficientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTokenSpecificEfficientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTokenSpecificEfficientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

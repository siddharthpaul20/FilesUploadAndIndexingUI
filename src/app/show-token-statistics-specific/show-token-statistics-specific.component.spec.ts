import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTokenStatisticsSpecificComponent } from './show-token-statistics-specific.component';

describe('ShowTokenStatisticsSpecificComponent', () => {
  let component: ShowTokenStatisticsSpecificComponent;
  let fixture: ComponentFixture<ShowTokenStatisticsSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTokenStatisticsSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTokenStatisticsSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

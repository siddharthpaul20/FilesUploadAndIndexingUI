import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTokensWholeComponent } from './show-all-tokens-whole.component';

describe('ShowAllTokensWholeComponent', () => {
  let component: ShowAllTokensWholeComponent;
  let fixture: ComponentFixture<ShowAllTokensWholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllTokensWholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTokensWholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

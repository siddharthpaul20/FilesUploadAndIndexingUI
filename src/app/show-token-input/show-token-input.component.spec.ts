import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTokenInputComponent } from './show-token-input.component';

describe('ShowTokenInputComponent', () => {
  let component: ShowTokenInputComponent;
  let fixture: ComponentFixture<ShowTokenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTokenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTokenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

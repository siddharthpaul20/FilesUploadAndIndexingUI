import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPageComponentComponent } from './specific-page-component.component';

describe('SpecificPageComponentComponent', () => {
  let component: SpecificPageComponentComponent;
  let fixture: ComponentFixture<SpecificPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

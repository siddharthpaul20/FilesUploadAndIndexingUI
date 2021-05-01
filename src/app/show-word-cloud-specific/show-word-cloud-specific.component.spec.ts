import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWordCloudSpecificComponent } from './show-word-cloud-specific.component';

describe('ShowWordCloudSpecificComponent', () => {
  let component: ShowWordCloudSpecificComponent;
  let fixture: ComponentFixture<ShowWordCloudSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWordCloudSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWordCloudSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupContentViewerComponent } from './modal-popup-content-viewer.component';

describe('ModalPopupContentViewerComponent', () => {
  let component: ModalPopupContentViewerComponent;
  let fixture: ComponentFixture<ModalPopupContentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPopupContentViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopupContentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

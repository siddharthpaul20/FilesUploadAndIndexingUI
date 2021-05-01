import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDriveIndexInputFormComponent } from './network-drive-index-input-form.component';

describe('NetworkDriveIndexInputFormComponent', () => {
  let component: NetworkDriveIndexInputFormComponent;
  let fixture: ComponentFixture<NetworkDriveIndexInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkDriveIndexInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDriveIndexInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

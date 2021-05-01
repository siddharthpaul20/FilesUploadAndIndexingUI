import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDirectoryThatAreAlreadyIndexedComponent } from './show-directory-that-are-already-indexed.component';

describe('ShowDirectoryThatAreAlreadyIndexedComponent', () => {
  let component: ShowDirectoryThatAreAlreadyIndexedComponent;
  let fixture: ComponentFixture<ShowDirectoryThatAreAlreadyIndexedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDirectoryThatAreAlreadyIndexedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDirectoryThatAreAlreadyIndexedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

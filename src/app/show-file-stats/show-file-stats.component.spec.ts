import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFileStatsComponent } from './show-file-stats.component';

describe('ShowFileStatsComponent', () => {
  let component: ShowFileStatsComponent;
  let fixture: ComponentFixture<ShowFileStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFileStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFileStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

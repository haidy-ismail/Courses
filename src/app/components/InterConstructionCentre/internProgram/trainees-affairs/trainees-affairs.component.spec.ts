import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineesAffairsComponent } from './trainees-affairs.component';

describe('TraineesAffairsComponent', () => {
  let component: TraineesAffairsComponent;
  let fixture: ComponentFixture<TraineesAffairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineesAffairsComponent]
    });
    fixture = TestBed.createComponent(TraineesAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

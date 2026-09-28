import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSchedule } from './travel-schedule';

describe('TravelSchedule', () => {
  let component: TravelSchedule;
  let fixture: ComponentFixture<TravelSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelSchedule],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelSchedule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

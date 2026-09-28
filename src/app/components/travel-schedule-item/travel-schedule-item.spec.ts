import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelScheduleItem } from './travel-schedule-item';

describe('TravelScheduleItem', () => {
  let component: TravelScheduleItem;
  let fixture: ComponentFixture<TravelScheduleItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelScheduleItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelScheduleItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDashboardCard } from './simple-dashboard-card';

describe('SimpleDashboardCard', () => {
  let component: SimpleDashboardCard;
  let fixture: ComponentFixture<SimpleDashboardCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDashboardCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleDashboardCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

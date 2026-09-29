import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsHeader } from './cars-header';

describe('CarsHeader', () => {
  let component: CarsHeader;
  let fixture: ComponentFixture<CarsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

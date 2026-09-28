import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-travel-schedule-item',
  imports: [],
  templateUrl: './travel-schedule-item.html',
  styleUrl: './travel-schedule-item.sass',
})
export class TravelScheduleItem {

  @Input() travel! : any;
}

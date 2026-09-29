import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-dashboard-card',
  imports: [],
  templateUrl: './simple-dashboard-card.html',
  styleUrl: './simple-dashboard-card.sass',
})
export class SimpleDashboardCard {

  @Input() estatistica: string = "";
  @Input() value: string = "";
  @Input() title: string = "";
  @Input() src: string = "";

}

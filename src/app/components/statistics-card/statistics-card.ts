import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  imports: [],
  templateUrl: './statistics-card.html',
  styleUrl: './statistics-card.sass',
})
export class StatisticsCard {

  @Input() value: number = 78;
}

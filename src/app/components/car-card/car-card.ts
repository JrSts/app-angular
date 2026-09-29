import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [],
  templateUrl: './car-card.html',
  styleUrl: './car-card.sass',
})
export class CarCard {

  @Input() value: number = 80;
}

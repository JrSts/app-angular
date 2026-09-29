import { Component } from '@angular/core';
import { CarsHeader } from '../../components/cars-header/cars-header';
import { CarCard } from '../../components/car-card/car-card';

@Component({
  selector: 'app-carros',
  imports: [CarsHeader, CarCard],
  templateUrl: './carros.html',
  styleUrl: './carros.sass',
})
export class Carros {}

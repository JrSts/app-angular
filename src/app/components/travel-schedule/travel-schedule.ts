import { Component, Input } from '@angular/core';
import { TravelScheduleItem } from '../travel-schedule-item/travel-schedule-item';

@Component({
  selector: 'app-travel-schedule',
  imports: [TravelScheduleItem],
  templateUrl: './travel-schedule.html',
  styleUrl: './travel-schedule.sass',
})
export class TravelSchedule {

  @Input() travelList = [
    {
      id: 1,
      horario: "08:20",
      status: "Pendente",
      cidade: "Aracaju",
      destino: "HUSE"
    },
    {
      id: 1,
      horario: "08:20",
      status: "Pendente",
      cidade: "Itabaiana",
      destino: "Hospital Regional de Itabaiana"
    },
    {
      id: 1,
      horario: "08:20",
      status: "Pendente",
      cidade: "Lagarto",
      destino: "Hospital do Amor"
    }
  ]
}

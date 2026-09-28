import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SimpleDashboardCard } from '../../components/simple-dashboard-card/simple-dashboard-card';
import { StatisticsCard } from '../../components/statistics-card/statistics-card';
import { AlertsCard } from '../../components/alerts-card/alerts-card';
import { TravelSchedule } from '../../components/travel-schedule/travel-schedule';

@Component({
  selector: 'app-home',
  imports: [SimpleDashboardCard, StatisticsCard, AlertsCard, TravelSchedule],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
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

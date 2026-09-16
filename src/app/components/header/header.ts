import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.sass',
})
export class Header {

  constructor(private authService: AuthService) {}
  
  logout(event: MouseEvent) {
    this.authService.logout();
    event.preventDefault;
  }
}

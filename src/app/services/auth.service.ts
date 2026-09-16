import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'app-angular-authenticated';
  private readonly authenticated = signal(this.loadAuthenticationState());
  readonly isLoggedIn = this.authenticated.asReadonly();

  private loadAuthenticationState(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  isAuthenticated(): boolean {
    return this.authenticated();
  }

  login(): void {
    this.authenticated.set(true);
    localStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    this.authenticated.set(false);
    localStorage.removeItem(this.storageKey);
  }
}
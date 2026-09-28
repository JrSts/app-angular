import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { HomeGuard } from './pages/home/home.guard';
import { Signin } from './pages/signin/signin';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'signin', component: Signin },
    { path: 'home', component: Home, canActivate: [HomeGuard] },
    { path: 'motoristas', component: Home, canActivate: [HomeGuard] },
    { path: 'destinos', component: Home, canActivate: [HomeGuard] },
    { path: 'viagens', component: Home, canActivate: [HomeGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

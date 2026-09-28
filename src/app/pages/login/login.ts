import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputForm } from '../../components/input-form/input-form';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputForm],
  templateUrl: './login.html',
  styleUrl: './login.sass',
})
export class Login {

  form: FormGroup;
  logado: boolean = false;
  alreadyRegistered: boolean = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.form = this.formBuilder.group({
      "email": ["", [Validators.required, Validators.email]],
      "password": ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }

  navigate() {
    this.router.navigate(['/signin']);
  }
}

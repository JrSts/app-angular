import { Component } from '@angular/core';
import { InputForm } from '../../components/input-form/input-form';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [InputForm, ReactiveFormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.sass',
})
export class Signin {

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ){
    this.form = this.formBuilder.group({
      "nome": ["", [Validators.required, Validators.minLength(3)]],
      "email": ["", [Validators.required, Validators.email]],
      "telefone": ["", [Validators.required, Validators.minLength(9)]],
      "password": ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  signin() {
    //fazer Login
    this.router.navigate(['/login']);
  }

    navigate() {
     this.router.navigate(['/login']);
  }
}

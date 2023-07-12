import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

interface UserModel {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  password2: FormControl<string | null>;
  address: FormControl<string | null>;
  address2: FormControl<string | null>;
  city: FormControl<string | null>;
  selected: FormControl<string | null>;
  zip: FormControl<string | null>;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  userModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userModel = this.fb.group<UserModel>({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d{1,3})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      password2: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      selected: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const password2 = control.get('password2')?.value;

    if (password !== password2) {
      control.get('password2')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
       control.get('password2')?.setErrors(null);
      return null;
    }
  }
}


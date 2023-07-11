import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserModel {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | any | null>;
  password2: FormControl<string | any | null>;
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
  userModel: FormGroup<UserModel>;

  constructor(private fb: FormBuilder) {
    this.userModel = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d{1,3})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      password2: ['', [Validators.required]],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      selected: ['', Validators.required],
      zip: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): {[key: string]: any} | null {
    const password = group.get('password').value;
    const password2 = group.get('password2').value;
  
    if (password !== password2) {
      group.get('password2').setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      group.get('password2').setErrors(null);
      return null;
    }
  }
}


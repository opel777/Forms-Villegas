import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface UserModel{
    email:FormControl<string|null>;
    password: FormControl<string|null>;
    password2:FormControl<string|null>;
    address:FormControl<string|null>;
    address2:FormControl<string|null>;
    city:FormControl<string|null>;
    selected:FormControl<string|null>;
    zip:FormControl<string|null>;
}



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 userModel: FormGroup<UserModel>;

 constructor(private fb: FormBuilder){
  this.userModel = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    password2:['',Validators.required],
    address:['',Validators.required],
    address2:['',Validators.required],
    city:['',Validators.required],
    selected:['',Validators.required],
    zip:['',Validators.required]


  })
 }
}

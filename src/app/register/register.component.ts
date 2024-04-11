import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email='';
    this.password='';
    this.confirmPassword='';
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}

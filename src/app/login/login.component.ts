import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}


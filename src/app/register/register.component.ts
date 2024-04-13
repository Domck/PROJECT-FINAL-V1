import { Component } from '@angular/core';
import {  UsersService } from "../users/users.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = ''; // Inicializar el email como una cadena vacía
  password: string = ''; // Inicializar la contraseña como una cadena vacía
  passwordError: boolean = false; // Inicializar el indicador de error de contraseña como falso
  confirmPassword: string='';

  constructor(public userService: UsersService, public router: Router) { }
  register(){
    if (this.password !== this.confirmPassword) {
      this.passwordError = true;
      return;
    }
    const user = { email: this.email, password: this.password };

    this.userService.register(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/");
      console.log(data);
      });
  }
  }



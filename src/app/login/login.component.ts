import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string='';
  registerButtonClicked: any;
openRegisterDialog: any;

constructor(
  public userService: UsersService,
  public router: Router,
  public dialog: MatDialog
) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/");
      console.log(data);},
      (error) => {
        console.log(error);
      }
    );
  }
  openRegisterPage() {
    if (!this.registerButtonClicked) {
      this.registerButtonClicked = true;
    this.dialog.open(RegisterComponent);
  }
}
closeRegisterDialog() {
  this.registerButtonClicked = false; // Restablecer la bandera a false al cerrar la ventana
}
}




import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interface/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usernameControl: FormControl;
  passwordControl: FormControl;
  errorMessage: string;
  loginResponse!: LoginResponse;

  constructor(private authService: AuthService , private router: Router) {
    this.errorMessage = '';
    this.usernameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
    ]);
    this.passwordControl = new FormControl('', Validators.required);
  }

  login() {
    this.authService
      .login(this.usernameControl.value, this.passwordControl.value)
      .subscribe((response) => {
        console.log('login sucessfull');
        this.loginResponse = response;
        localStorage.setItem('token', this.loginResponse.token);
        this.router.navigateByUrl("/create")
      });
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../interface/login-response';
import { Router } from '@angular/router';
import { DataCommunicationService } from '../../services/data-communication.service';

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
  currentUser!:string;
  currentRole!:string;

  constructor(private authService: AuthService , private router: Router, private dataCom:DataCommunicationService) {
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
        this.currentUser=this.loginResponse.username;
        this.currentRole=this.loginResponse.role;
        this.dataCom.currentUserSubject.next(this.currentUser);
        this.dataCom.currentRoleSubject.next(this.currentRole);
        localStorage.setItem('token', this.loginResponse.token);
        this.router.navigateByUrl("/create")
      });
  }
}

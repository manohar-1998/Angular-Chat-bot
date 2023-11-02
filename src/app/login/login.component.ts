import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fadeInOut } from '../../animations/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInOut],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  sentOtp: boolean = false;
  otpSent: boolean = false;
  loading: boolean = false;

  constructor(private router: Router) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  handleEmailVerification() {
    if (this.emailFormControl.get('email')?.value) {
      this.loading = true;
    }
    setTimeout(() => {
      // Assuming that email verification was successful
      this.sentOtp = true;
      this.loading = false;
    }, 1000);
  }

  handleLogin() {
    this.router.navigate(['']);
  }
}

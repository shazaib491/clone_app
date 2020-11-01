import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  detail: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder, private auth: AuthService, private _snackBar: MatSnackBar

    , private router: Router) { }

  loginForm: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]);

  password = new FormControl('', [Validators.required]);

  ngOnInit(): void {

if(this.auth.isLoggedIn()){
  this.router.navigate(['/dashboard'])

}

    this.loginForm = this.fb.group({
      "email": this.email,
      "password": this.password
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {

      return 'Email is Required';

    } 
    else if(this.email.hasError('email'))
    {
      return 'Not a valid email';
    }
    else if(this.email.hasError('pattern'))
    {
        return 'Email must be proper format';
      }
  }
  getErrorForPassword() {
    if (this.password.hasError('required')) {
      return 'Password is Required';
    }
    return this.password.hasError('password');

  }
  hide = true;
  success: any;
  submit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((data) => {
        this.success = data;
        if (this.success.success) {
          this._snackBar.open(this.success.success, 'End now', {
            duration: 1500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.auth.setToken(this.success.token);
          this.auth.storeUserData(this.success.user);
          this.router.navigate(['./dashboard'])
        }
        else {
          this._snackBar.open(this.success.msg, 'End now', {
            duration: 1500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      })

    }
  }

}

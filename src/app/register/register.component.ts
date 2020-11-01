import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../auth.service';
import { FetchService } from './../fetch.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MustMatch } from '../helper/must_match';
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
data: [];
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fetch: FetchService, private auth: AuthService, private fb: FormBuilder,
    private _snackBar: MatSnackBar,private router:Router
  ) { }
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]);
  password = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  cpassword = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
  mobile = new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]);
  data: [];
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      "email": this.email,
      "password": this.password,
      "cpassword": this.cpassword,
      "mobile": this.mobile
    })
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is Required';
    } else if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    else if (this.email.hasError('pattern')) {
      return 'Email must be proper format';
    }
  }
  getErrorForPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    else if (this.password.hasError('pattern')) {
      return 'Password Should be Strong';
    }
  }
  getErrorForcPassword() {
    if (this.cpassword.hasError('required')) {
      return 'You must enter a password';
    }
    else if (this.cpassword.hasError('pattern')) {
      return 'Password Should be Strong';
    }
  }
  getErrorForMobile() {
    if (this.mobile.hasError('required')) {
      return 'You must enter a Mobile no';
    }
    else if (this.mobile.hasError('pattern')) {
      return 'Mobile number shold be 10 digits';
    }


  }
  hide = true;
  success: any;
  submit() {
    if (this.loginForm.valid) {
      this.auth.register(this.loginForm.value).subscribe((res) => {
        this.success = res;
        if (this.success.success) {
          this._snackBar.open(this.success.success, 'End now', {
            duration: 1500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.loginForm.reset();
          this.router.navigate(['./login']);
        }
        else {
          this._snackBar.open(this.success.error, 'End now', {
            duration: 1500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }

      },
        error => {
          console.log(error)
        }
      )
    }

  }
}

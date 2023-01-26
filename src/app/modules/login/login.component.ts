import { ToasterService } from './../../core/services/toaster.service';
import { Router } from '@angular/router';
import { JwtService } from './../../core/authentication/jwt.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private jwt: JwtService,
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToasterService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log('invalid');
      return;
    } else {
      this.login();
    }
  }

  private login() {
    this.jwt
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (res) => {
          this.checkRole(res);
        },
        error: (err: any) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.toaster.toast({ type: 'error', msg: err.error.message });
          } else this.toaster.toast({ type: 'error', msg: err });
        },
      });
  }

  private checkRole(res: any) {
    this.jwt.checkUserRole(res.data.role).subscribe((res) => {
      if (res.payload?.data?.title == 'Admin') {
        this.jwt.patchRoleValue(res.payload?.data?.title);
        this.router.navigate(['admin-panel']);
      } else this.router.navigate(['/']);
    });
  }
}

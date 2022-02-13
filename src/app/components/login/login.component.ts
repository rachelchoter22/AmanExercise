import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    let isLogedin = this.authenticationService
      .login(this.formControls.username.value, this.formControls.password.value);

    if (isLogedin) {
      this.dialogRef.close();
      this.router.navigate(['/jokes-list']);
    }
  }
}

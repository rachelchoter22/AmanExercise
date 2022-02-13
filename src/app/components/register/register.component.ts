import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) return;
    let user = <User>{
      email: this.formControls.email.value,
      password: this.formControls.password.value,
      username: this.formControls.username.value
    }
    let isRegist = this.authenticationService.register(user);
    if (isRegist) {
      this.dialogRef.close();
      this.router.navigate(['/jokes-list']);
    }
  }
}

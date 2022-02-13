import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

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
    if (isRegist)
      this.router.navigate(['/jokes-list']);
  }
}

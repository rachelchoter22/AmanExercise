import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public authenticationService: AuthenticationService,
    private router: Router) {


  }

  ngOnInit(): void {

    if (!this.authenticationService.currentUserValue) {
      let dialogRef = this.dialog.open(DialogComponent, {
        height: '400px',
        width: '600px',
      });
    }
    else {
      this.router.navigate(['/jokes-list']);
    }

  }

}

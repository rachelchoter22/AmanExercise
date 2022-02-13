import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JokeModalComponent } from '../joke-modal/joke-modal.component';
import { Joke } from '../../models/joke.model';
import { JokesService } from '../../services/jokes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  dataSource: Joke[] = [];
  displayedColumns: string[] = ['id', 'category', 'type', 'setup'];
  clickedRows = new Set<Joke>();

  constructor(private jokesService: JokesService,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/'])

      return;
    }
    this.jokesService.getJokes()
      .subscribe(res => {
        this.dataSource = res;
      });
  }
  getRecord(row: any) {


    let dialogRef = this.dialog.open(JokeModalComponent, {
      height: '400px',
      width: '600px',
      data: row
    });

  }
}

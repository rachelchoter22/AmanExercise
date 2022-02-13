import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JokeModalComponent } from '../components/joke-modal/joke-modal.component';
import { Joke } from '../models/joke.model';
import { JokesService } from '../services/jokes.service';

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
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.jokesService.getJokes()
      .subscribe(res => {
        this.dataSource = res;
      });
  }
  getRecord(row:any) {
   

    let dialogRef = this.dialog.open(JokeModalComponent, {
      height: '400px',
      width: '600px',
      data: row
    });

  }
}

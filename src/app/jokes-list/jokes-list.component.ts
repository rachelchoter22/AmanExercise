import { Component, OnInit } from '@angular/core';
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
    ) { }

  ngOnInit(): void {
    this.jokesService.getJokes()
      .subscribe(res => {
        this.dataSource = res;
      });
  }
  getRecord(row:any) {
    console.log(row)

  }
}

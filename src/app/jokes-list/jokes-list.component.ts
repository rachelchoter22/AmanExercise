import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {

  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.jokesService.loadJokes();
  }

}

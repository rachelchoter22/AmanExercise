import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  usersFileUrl: string = 'assets/jokes.json';
  jokes: Joke[] = [];
  constructor(private http: HttpClient) {

  }

  loadJokes() {
    this.http.get<Joke[]>(this.usersFileUrl)
      .subscribe(res => {
        this.jokes = res;
      })
  }
}

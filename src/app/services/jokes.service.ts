import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  usersFileUrl: string = 'assets/jokes.json';

  constructor(private http: HttpClient) {

  }

  getJokes() {
    return this.http.get<Joke[]>(this.usersFileUrl);
  }
}

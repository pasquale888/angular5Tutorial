import { Component, OnInit } from '@angular/core';

import { Joke } from '../joke/joke';
import { JokeComponent } from './../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('first element setup', 'first element punchline'),
      new Joke('second element setup', 'second element punchline'),
      new Joke('third element setup', 'third element punchline')
    ];
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

}

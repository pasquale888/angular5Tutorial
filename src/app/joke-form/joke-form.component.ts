import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke() {
    this.jokeCreated.emit(new Joke("A setup","A punchline"));
  }

}

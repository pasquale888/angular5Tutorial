import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent {

  setup: string;
  punchline: string;

  constructor() {
    this.setup = "Hi this is setup property";
    this.punchline = "Hi this is punchline property";
  }

}

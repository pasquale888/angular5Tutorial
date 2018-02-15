import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Object[];

  constructor() { 
    this.jokes = [
      {
        setup: "first element setup",
        punchline: "first element punchline"
      },
      {
        setup: "second element setup",
        punchline: "second element punchline"
      },
      {
        setup: "third element setup",
        punchline: "third element punchline"
      }
    ];
  }

}

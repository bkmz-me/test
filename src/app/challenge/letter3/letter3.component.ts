import { Component, OnInit } from '@angular/core';
const LIST: string[] = [
  'слива', 'завод', 'вагон'
];

@Component({
  selector: 'app-letter3',
  templateUrl: './letter3.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter3Component implements OnInit {
  public list: string[] = LIST;
  public rand = this.list[Math.floor(Math.random() * this.list.length)];
  public word: string;
  findLetter(event) {
    if (event === 'слива') {
      console.log(event);
      this.word = event;
      let razbiv = this.word.split('');
      console.log(razbiv);
      console.log(this.word[3]);
    } else if (event === 'завод') {
      console.log(event);
      this.word = event;
      console.log(this.word[2]);
    } else {
      console.log(event);
      this.word = event;
      console.log(this.word[0]);
    };
  }
  constructor() { }

  ngOnInit() {
  }

}


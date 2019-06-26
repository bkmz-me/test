import { Component, OnInit } from '@angular/core';
const LIST: string[] = [
  'бидон', 'вода', 'город'
];

@Component({
  selector: 'app-letter5',
  templateUrl: './letter5.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter5Component implements OnInit {
  public list: string[] = LIST;
  public rand = this.list[Math.floor(Math.random() * this.list.length)];
  public word: string;
  findLetter(event) {
    if (event === 'бидон') {
      console.log(event);
      this.word = event;
      let razbiv = this.word.split('');
      console.log(razbiv);
      console.log(this.word[2]);
    } else if (event === 'вода') {
      console.log(event);
      this.word = event;
      console.log(this.word[2]);
    } else {
      console.log(event);
      this.word = event;
      console.log(this.word[4]);
    };
  }
  constructor() { }

  ngOnInit() {
  }

}

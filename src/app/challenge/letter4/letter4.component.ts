import { Component, OnInit } from '@angular/core';
const LIST: string[] = [
  'зигзаг', 'киборг', 'слоган'
];

@Component({
  selector: 'app-letter4',
  templateUrl: './letter4.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter4Component implements OnInit {
  public list: string[] = LIST;
  public rand = this.list[Math.floor(Math.random() * this.list.length)];
  public word: string;
  findLetter(event) {
    if (event === 'зигзаг') {
      console.log(event);
      this.word = event;
      let razbiv = this.word.split('');
      console.log(razbiv);
      console.log(this.word[2], this.word[5]);
    } else if (event === 'киборг') {
      console.log(event);
      this.word = event;
      console.log(this.word[5]);
    } else {
      console.log(event);
      this.word = event;
      console.log(this.word[3]);
    };
  }
  constructor() { }

  ngOnInit() {
  }

}


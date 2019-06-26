import {Component, Input, OnInit} from '@angular/core';
const LIST: string[] = [
  'банан', 'барабан', 'робот'
];
@Component({
  selector: 'app-letter2',
  templateUrl: './letter2.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter2Component implements OnInit {
  public list: string[] = LIST;
  public rand = this.list[Math.floor(Math.random() * this.list.length)];
  public word: string;
  findLetter(event) {
    if (event === 'банан') {
      console.log(event);
      this.word = event;
      let razbiv = this.word.split('');
      console.log(razbiv);
      console.log(this.word[0]);
    } else if (event === 'барабан') {
      console.log(event);
      this.word = event;
      console.log(this.word[0], this.word[4]);
    } else {
      console.log(event);
      this.word = event;
      console.log(this.word[2]);
    };
  }
  constructor() { }

  ngOnInit() {
  }

}

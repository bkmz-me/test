import {Component, OnInit} from '@angular/core';
const LIST: string[] = [
    'ананас', 'такси', 'азбука'
];

@Component({
  selector: 'app-letter1',
  templateUrl: './letter1.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter1Component implements OnInit {
    public list: string[] = LIST;
    public rand = this.list[Math.floor(Math.random() * this.list.length)];
    public word: string;
    findLetter(event) {
        if (event === 'ананас') {
            console.log(event);
            this.word = event;
            let razbiv = this.word.split('');
            console.log(razbiv);
            console.log(this.word[0], this.word[2], this.word[4]);
        } else if (event === 'такси') {
            console.log(event);
            this.word = event;
            console.log(this.word[1]);
        } else {
            console.log(event);
            this.word = event;
            console.log(this.word[0], this.word[5]);
        };
    }
    constructor() { }

  ngOnInit() {
  }

}

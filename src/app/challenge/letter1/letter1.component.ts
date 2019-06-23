import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-letter1',
  templateUrl: './letter1.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter1Component implements OnInit {

  public rndWrd = [{wrd: 'ананас'}, {wrd: 'такси'}, {wrd: 'азбука'}];
  public random = (array) => {
    let wordd = array[Math.floor(Math.random() * array.length)];
    console.log(wordd);
    return wordd;
  }

  constructor() { }

  ngOnInit() {
  }

}

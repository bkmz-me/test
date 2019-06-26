import {Component, OnInit} from '@angular/core';
const LIST: string[] = [
    'Аа', 'Бб', 'Вв', 'Гг', 'Дд'
];
// const stateObj = {
//   foo: 'Aa'
// };
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})


export class ChallengeComponent implements OnInit {

  public list: string[] = LIST;
  public activeItem: string;
  public onSelectItem(item: string): void {
    this.activeItem = item;
  }

  // goTo(page) {
  //   history.pushState(stateObj, 'page', '/challenge/' + page);
  // }
  constructor() { }
  ngOnInit() {
  }
}

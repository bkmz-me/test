import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  public letters = [
    { name: 'Аа' },
    { name: 'Бб' },
    { name: 'Вв' },
    { name: 'Гг' },
    { name: 'Дд' }
  ];
  public randomWord = [
    {wrd: 'ананас'}, {wrd: 'такси'}, {wrd: 'азбука'},
    {wrd: 'банан'}, {wrd: 'барабан'}, {wrd: 'робот'},
    {wrd: 'слива'}, {wrd: 'завод'}, {wrd: 'вагон'},
    {wrd: 'зигзаг'}, {wrd: 'киборг'}, {wrd: 'слоган'},
    {wrd: 'бидон'}, {wrd: 'вода'}, {wrd: 'город'}
  ];

  constructor() { }


  ngOnInit() {
  }
}

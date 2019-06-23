import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-letter2',
  templateUrl: './letter2.component.html',
  styleUrls: ['../challenge.component.css']
})
export class Letter2Component implements OnInit {

  @Input() letter;

  constructor() { }

  ngOnInit() {
  }

}

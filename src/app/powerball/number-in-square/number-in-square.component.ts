import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'number-in-square',
  templateUrl: './number-in-square.component.html',
  styleUrls: ['./number-in-square.component.less']
})
export class NumberInSquareComponent implements OnInit {

  @Input('number') public displayNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

}

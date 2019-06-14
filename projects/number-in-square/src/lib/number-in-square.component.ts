import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-number-in-square',
  templateUrl: './number-in-square.component.html',
  styleUrls: ['./number-in-square.component.css']
})
export class NumberInSquareComponent implements OnInit {
  @Input() public number = 0;
  constructor() { }
  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.less']
})
export class NumberGridComponent implements OnInit {

  @Input() public numberStart = 1;
  @Input() public numberEnd = 35;
  @Input() public winningNumbers: Array<number>;
  @Input() public showWinningNumbers = false;

  public numbers: Array<number>;

  constructor() { }

  private numbersGen(numberStart, numberEnd): Array<number> {
    const retVal: Array<number> = [];
    for (let i = numberStart; i <= numberEnd; i++) {
      retVal.push(i);
    }
    return retVal;
  }

  ngOnInit() {
    this.numbers = this.numbersGen(this.numberStart, this.numberEnd);
  }

}

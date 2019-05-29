import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.less']
})
export class NumberGridComponent implements OnInit {

  @Input() public numberStart: number = 1;
  @Input() public numberEnd: number = 35;
  @Input() public winningNumbers: Array<number>;
  @Input() public showWinningNumbers: boolean = false;

  public numbers: Array<number>;

  constructor() { }

  private numbersGen(numberStart, numberEnd): Array<number>{
    let retVal = [];
    for(let i = numberStart; i <= numberEnd; i++){
      retVal.push(i);
    }
    return retVal;
  }

  ngOnInit() {
    this.numbers = this.numbersGen(this.numberStart, this.numberEnd);
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'winning-numbers',
  templateUrl: './winning-numbers.component.html',
  styleUrls: ['./winning-numbers.component.less']
})
export class WinningNumbersComponent  {

  public primaryPlaceHolder: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  public secondaryPlaceHolder: Array<number> = [0]

  @Input() public primaryNumbers: Array<number>;
  @Input() public secondaryNumbers: Array<number>;

}

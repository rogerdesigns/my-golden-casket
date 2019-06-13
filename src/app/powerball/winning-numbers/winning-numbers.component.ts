import { Component, Input } from '@angular/core';

@Component({
  selector: 'winning-numbers',
  templateUrl: './winning-numbers.component.html',
  styleUrls: ['./winning-numbers.component.less']
})
export class WinningNumbersComponent {

  public primaryPlaceHolder: Array<number> = [null, null, null, null, null, null, null];
  public secondaryPlaceHolder: Array<number> = [null];

  @Input() public primaryNumbers: Array<number>;
  @Input() public secondaryNumbers: Array<number>;

}

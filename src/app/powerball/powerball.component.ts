import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, WinningNumbers } from '../data.service';

const goldenCasket = 'GoldenCasket';
const powerball = 'Powerball';

@Component({
  selector: 'app-powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.less']
})
export class PowerballComponent implements OnInit, OnDestroy {

  public subscriptions: Array<Subscription> = [];
  public winningNumbers: WinningNumbers;
  public showWinningNumbers: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  onClickFill() {
    const param = {
      CompanyId: goldenCasket,
      MaxDrawCountPerProduct: 1,
      OptionalProductFilter: [powerball]
    };

    this.subscriptions.push(
      this.dataService.getWinningNumbers(param).subscribe((result: WinningNumbers) => {
        this.winningNumbers = result;
        this.showWinningNumbers = true;
      }, (err: any) => console.log(err))
    );
  }

  onClickReset() {
    this.winningNumbers = undefined;
    this.showWinningNumbers = false;
  }
}

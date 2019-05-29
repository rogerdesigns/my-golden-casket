import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, WinningNumbers } from '../data.service';

@Component({
  selector: 'powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.less']
})
export class PowerballComponent implements OnInit {
  
  public winningNumbers: WinningNumbers;
  public showWinningNumbers: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onClickFill() {
    const param = {
      CompanyId: "GoldenCasket",
      MaxDrawCountPerProduct: 1,
      OptionalProductFilter: ["Powerball"]
    }

    this.dataService.getWinningNumbers(param).subscribe((result: WinningNumbers) => {
      this.winningNumbers = result;
      this.showWinningNumbers = true;
    },(err: any) => console.log(err))
  }

  onClickReset(){
    this.winningNumbers = undefined;
    this.showWinningNumbers = false;
  }
}
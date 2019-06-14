import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerballComponent } from './powerball.component';
import { DataService } from '../data.service';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { NumberInCircleComponent } from './number-in-circle/number-in-circle.component';
import { WinningNumbersComponent } from './winning-numbers/winning-numbers.component';
import { NumberInSquareModule } from 'number-in-square';
@NgModule({
  declarations: [PowerballComponent, NumberGridComponent, NumberInCircleComponent, WinningNumbersComponent],
  imports: [
    CommonModule,
    NumberInSquareModule
  ],
  providers: [DataService]
})
export class PowerballModule { }

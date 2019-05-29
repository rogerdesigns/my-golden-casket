import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerballComponent } from './powerball.component';
import { DataService } from '../data.service';
import { NumberInSquareComponent } from './number-in-square/number-in-square.component';
import { NumberGridComponent } from './number-grid/number-grid.component';
import { NumberInCircleComponent } from './number-in-circle/number-in-circle.component';
import { WinningNumbersComponent } from './winning-numbers/winning-numbers.component';
@NgModule({
  declarations: [PowerballComponent, NumberInSquareComponent, NumberGridComponent, NumberInCircleComponent, WinningNumbersComponent],
  imports: [
    CommonModule
  ],
  providers:[DataService]
})
export class PowerballModule { }

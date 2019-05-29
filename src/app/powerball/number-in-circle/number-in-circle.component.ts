import { Component, HostBinding, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'number-in-circle',
  templateUrl: './number-in-circle.component.html',
  styleUrls: ['./number-in-circle.component.less']
})
export class NumberInCircleComponent implements OnChanges {

  @HostBinding('style.background') numberBackground: string = '#FFFFFF';

  @Input() number: number = 0;
  @Input() numberBg: string = '#3450a7';

  constructor() { }

  ngOnChanges() {
    if (this.number) {
      this.numberBackground = this.numberBg
    }
  }

}

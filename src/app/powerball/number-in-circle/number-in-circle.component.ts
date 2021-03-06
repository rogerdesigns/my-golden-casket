import { Component, HostBinding, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-in-circle',
  templateUrl: './number-in-circle.component.html',
  styleUrls: ['./number-in-circle.component.less']
})
export class NumberInCircleComponent implements OnChanges {

  @HostBinding('style.background') numberBackground = 'none';

  @Input() number = 0;
  @Input() numberBg = '#3450a7';

  constructor() { }

  ngOnChanges() {
    if (this.number) {
      this.numberBackground = this.numberBg;
    }
  }

}

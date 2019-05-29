import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInCircleComponent } from './number-in-circle.component';

describe('NumberInCircleComponent', () => {
  let component: NumberInCircleComponent;
  let fixture: ComponentFixture<NumberInCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInSquareComponent } from './number-in-square.component';

describe('NumberInSquareComponent', () => {
  let component: NumberInSquareComponent;
  let fixture: ComponentFixture<NumberInSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

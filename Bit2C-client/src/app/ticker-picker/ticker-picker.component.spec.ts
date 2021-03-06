import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerPickerComponent } from './ticker-picker.component';

describe('TickerPickerComponent', () => {
  let component: TickerPickerComponent;
  let fixture: ComponentFixture<TickerPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

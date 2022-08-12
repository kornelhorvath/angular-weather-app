import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyPanelComponent } from './hourly-panel.component';

describe('HourlyPanelComponent', () => {
  let component: HourlyPanelComponent;
  let fixture: ComponentFixture<HourlyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

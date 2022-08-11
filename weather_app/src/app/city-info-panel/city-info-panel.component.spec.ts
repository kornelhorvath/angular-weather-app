import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInfoPanelComponent } from './city-info-panel.component';

describe('CityInfoPanelComponent', () => {
  let component: CityInfoPanelComponent;
  let fixture: ComponentFixture<CityInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

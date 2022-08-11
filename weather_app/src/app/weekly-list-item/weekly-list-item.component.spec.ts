import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyListItemComponent } from './weekly-list-item.component';

describe('WeeklyListItemComponent', () => {
  let component: WeeklyListItemComponent;
  let fixture: ComponentFixture<WeeklyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

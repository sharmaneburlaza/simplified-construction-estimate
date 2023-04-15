import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularColumnComponent } from './circular-column.component';

describe('CircularColumnComponent', () => {
  let component: CircularColumnComponent;
  let fixture: ComponentFixture<CircularColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

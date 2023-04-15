import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularColumnComponent } from './rectangular-column.component';

describe('RectangularColumnComponent', () => {
  let component: RectangularColumnComponent;
  let fixture: ComponentFixture<RectangularColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangularColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangularColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

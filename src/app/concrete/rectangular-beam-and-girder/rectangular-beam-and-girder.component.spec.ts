import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularBeamAndGirderComponent } from './rectangular-beam-and-girder.component';

describe('RectangularBeamAndGirderComponent', () => {
  let component: RectangularBeamAndGirderComponent;
  let fixture: ComponentFixture<RectangularBeamAndGirderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangularBeamAndGirderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangularBeamAndGirderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

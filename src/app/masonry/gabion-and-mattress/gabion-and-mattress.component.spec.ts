import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabionAndMattressComponent } from './gabion-and-mattress.component';

describe('GabionAndMattressComponent', () => {
  let component: GabionAndMattressComponent;
  let fixture: ComponentFixture<GabionAndMattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabionAndMattressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabionAndMattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

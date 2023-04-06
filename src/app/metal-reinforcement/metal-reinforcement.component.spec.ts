import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalReinforcementComponent } from './metal-reinforcement.component';

describe('MetalReinforcementComponent', () => {
  let component: MetalReinforcementComponent;
  let fixture: ComponentFixture<MetalReinforcementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalReinforcementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalReinforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

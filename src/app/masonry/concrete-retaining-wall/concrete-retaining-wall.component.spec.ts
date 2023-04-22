import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteRetainingWallComponent } from './concrete-retaining-wall.component';

describe('ConcreteRetainingWallComponent', () => {
  let component: ConcreteRetainingWallComponent;
  let fixture: ComponentFixture<ConcreteRetainingWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteRetainingWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteRetainingWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteSlabComponent } from './concrete-slab.component';

describe('ConcreteSlabComponent', () => {
  let component: ConcreteSlabComponent;
  let fixture: ComponentFixture<ConcreteSlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteSlabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

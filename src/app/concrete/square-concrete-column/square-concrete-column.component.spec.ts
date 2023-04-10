import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareConcreteColumnComponent } from './square-concrete-column.component';

describe('SquareConcreteColumnComponent', () => {
  let component: SquareConcreteColumnComponent;
  let fixture: ComponentFixture<SquareConcreteColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareConcreteColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareConcreteColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

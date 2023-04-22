import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteHollowBlocksComponent } from './concrete-hollow-blocks.component';

describe('ConcreteHollowBlocksComponent', () => {
  let component: ConcreteHollowBlocksComponent;
  let fixture: ComponentFixture<ConcreteHollowBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteHollowBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteHollowBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

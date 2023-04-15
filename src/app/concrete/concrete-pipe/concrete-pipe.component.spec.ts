import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretePipeComponent } from './concrete-pipe.component';

describe('ConcretePipeComponent', () => {
  let component: ConcretePipeComponent;
  let fixture: ComponentFixture<ConcretePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcretePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcretePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

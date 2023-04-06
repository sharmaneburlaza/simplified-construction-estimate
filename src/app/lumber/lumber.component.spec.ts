import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberComponent } from './lumber.component';

describe('LumberComponent', () => {
  let component: LumberComponent;
  let fixture: ComponentFixture<LumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

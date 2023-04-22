import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiprapComponent } from './riprap.component';

describe('RiprapComponent', () => {
  let component: RiprapComponent;
  let fixture: ComponentFixture<RiprapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiprapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiprapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

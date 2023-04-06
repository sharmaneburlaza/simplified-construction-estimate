import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileworkComponent } from './tilework.component';

describe('TileworkComponent', () => {
  let component: TileworkComponent;
  let fixture: ComponentFixture<TileworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

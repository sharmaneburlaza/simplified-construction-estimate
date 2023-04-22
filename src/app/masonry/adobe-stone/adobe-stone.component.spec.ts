import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeStoneComponent } from './adobe-stone.component';

describe('AdobeStoneComponent', () => {
  let component: AdobeStoneComponent;
  let fixture: ComponentFixture<AdobeStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobeStoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobeStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

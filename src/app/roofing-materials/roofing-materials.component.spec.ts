import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofingMaterialsComponent } from './roofing-materials.component';

describe('RoofingMaterialsComponent', () => {
  let component: RoofingMaterialsComponent;
  let fixture: ComponentFixture<RoofingMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofingMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoofingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

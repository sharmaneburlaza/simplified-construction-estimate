import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsScafoldingAndStagingComponent } from './forms-scafolding-and-staging.component';

describe('FormsScafoldingAndStagingComponent', () => {
  let component: FormsScafoldingAndStagingComponent;
  let fixture: ComponentFixture<FormsScafoldingAndStagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsScafoldingAndStagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsScafoldingAndStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

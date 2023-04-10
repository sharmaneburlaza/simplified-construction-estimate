import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAndFootingComponent } from './post-and-footing.component';

describe('PostAndFootingComponent', () => {
  let component: PostAndFootingComponent;
  let fixture: ComponentFixture<PostAndFootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAndFootingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAndFootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

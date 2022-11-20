import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StJohnComponent } from './st-john.component';

describe('StJohnComponent', () => {
  let component: StJohnComponent;
  let fixture: ComponentFixture<StJohnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StJohnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StJohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

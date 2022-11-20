import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNeedComponent } from './client-need.component';

describe('ClientNeedComponent', () => {
  let component: ClientNeedComponent;
  let fixture: ComponentFixture<ClientNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

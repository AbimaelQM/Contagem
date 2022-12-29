import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeterocromiaComponent } from './heterocromia.component';

describe('HeterocromiaComponent', () => {
  let component: HeterocromiaComponent;
  let fixture: ComponentFixture<HeterocromiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeterocromiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeterocromiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

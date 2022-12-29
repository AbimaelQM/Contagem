import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaRbComponent } from './cinema-rb.component';

describe('CinemaRbComponent', () => {
  let component: CinemaRbComponent;
  let fixture: ComponentFixture<CinemaRbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaRbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaRbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

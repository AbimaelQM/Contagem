import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzeiroComponent } from './cruzeiro.component';

describe('CruzeiroComponent', () => {
  let component: CruzeiroComponent;
  let fixture: ComponentFixture<CruzeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruzeiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruzeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

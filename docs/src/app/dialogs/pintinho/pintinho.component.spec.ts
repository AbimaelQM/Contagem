import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintinhoComponent } from './pintinho.component';

describe('PintinhoComponent', () => {
  let component: PintinhoComponent;
  let fixture: ComponentFixture<PintinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PintinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

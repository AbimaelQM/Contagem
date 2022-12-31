import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReencontroComponent } from './reencontro.component';

describe('ReencontroComponent', () => {
  let component: ReencontroComponent;
  let fixture: ComponentFixture<ReencontroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReencontroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReencontroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

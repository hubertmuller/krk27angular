import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladComponent } from './blad.component';

describe('BladComponent', () => {
  let component: BladComponent;
  let fixture: ComponentFixture<BladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

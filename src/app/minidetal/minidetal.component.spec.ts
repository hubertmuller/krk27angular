import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinidetalComponent } from './minidetal.component';

describe('MinidetalComponent', () => {
  let component: MinidetalComponent;
  let fixture: ComponentFixture<MinidetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinidetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinidetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

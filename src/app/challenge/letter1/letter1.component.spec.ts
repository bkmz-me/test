import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Letter1Component } from './letter1.component';

describe('Letter1Component', () => {
  let component: Letter1Component;
  let fixture: ComponentFixture<Letter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Letter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Letter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

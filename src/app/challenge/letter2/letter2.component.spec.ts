import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Letter2Component } from './letter2.component';

describe('Letter2Component', () => {
  let component: Letter2Component;
  let fixture: ComponentFixture<Letter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Letter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Letter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

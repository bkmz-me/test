import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Letter3Component } from './letter3.component';

describe('Letter3Component', () => {
  let component: Letter3Component;
  let fixture: ComponentFixture<Letter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Letter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Letter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Letter4Component } from './letter4.component';

describe('Letter4Component', () => {
  let component: Letter4Component;
  let fixture: ComponentFixture<Letter4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Letter4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Letter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

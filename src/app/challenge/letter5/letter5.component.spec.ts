import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Letter5Component } from './letter5.component';

describe('Letter5Component', () => {
  let component: Letter5Component;
  let fixture: ComponentFixture<Letter5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Letter5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Letter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

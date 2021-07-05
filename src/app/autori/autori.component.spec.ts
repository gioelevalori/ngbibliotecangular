/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutoriComponent } from './autori.component';

describe('AutoriComponent', () => {
  let component: AutoriComponent;
  let fixture: ComponentFixture<AutoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

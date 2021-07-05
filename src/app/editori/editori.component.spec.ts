/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditoriComponent } from './editori.component';

describe('EditoriComponent', () => {
  let component: EditoriComponent;
  let fixture: ComponentFixture<EditoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

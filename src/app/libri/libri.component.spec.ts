/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibriComponent } from './libri.component';

describe('LibriComponent', () => {
  let component: LibriComponent;
  let fixture: ComponentFixture<LibriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

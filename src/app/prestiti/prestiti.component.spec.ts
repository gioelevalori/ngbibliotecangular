/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrestitiComponent } from './prestiti.component';

describe('PrestitiComponent', () => {
  let component: PrestitiComponent;
  let fixture: ComponentFixture<PrestitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

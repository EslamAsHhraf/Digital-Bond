/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShakingTextComponent } from './shaking-text.component';

describe('ShakingTextComponent', () => {
  let component: ShakingTextComponent;
  let fixture: ComponentFixture<ShakingTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakingTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

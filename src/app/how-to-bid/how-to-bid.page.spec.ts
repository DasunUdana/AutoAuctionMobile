import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoToBidPage } from './how-to-bid.page';

describe('HowToBidPage', () => {
  let component: HoToBidPage;
  let fixture: ComponentFixture<HoToBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoToBidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoToBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

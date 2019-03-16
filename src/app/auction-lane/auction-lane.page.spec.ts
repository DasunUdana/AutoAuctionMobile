import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLanePage } from './auction-lane.page';

describe('AuctionLanePage', () => {
  let component: AuctionLanePage;
  let fixture: ComponentFixture<AuctionLanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionLanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionLanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

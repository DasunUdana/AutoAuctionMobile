import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionShedulesPage } from './auction-shedules.page';

describe('AuctionShedulesPage', () => {
  let component: AuctionShedulesPage;
  let fixture: ComponentFixture<AuctionShedulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionShedulesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionShedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionInventoryPage } from './auction-inventory.page';

describe('AuctionInventoryPage', () => {
  let component: AuctionInventoryPage;
  let fixture: ComponentFixture<AuctionInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionInventoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

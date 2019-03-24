import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalDetailViewPage } from './vehical-detail-view.page';

describe('VehicalDetailViewPage', () => {
  let component: VehicalDetailViewPage;
  let fixture: ComponentFixture<VehicalDetailViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalDetailViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalDetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

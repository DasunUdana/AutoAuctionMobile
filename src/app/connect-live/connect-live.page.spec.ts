import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectLivePage } from './connect-live.page';

describe('ConnectLivePage', () => {
  let component: ConnectLivePage;
  let fixture: ComponentFixture<ConnectLivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectLivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectLivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

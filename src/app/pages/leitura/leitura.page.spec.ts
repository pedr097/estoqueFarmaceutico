import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeituraPage } from './leitura.page';

describe('LeituraPage', () => {
  let component: LeituraPage;
  let fixture: ComponentFixture<LeituraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeituraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeituraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

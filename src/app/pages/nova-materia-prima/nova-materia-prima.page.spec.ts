import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMateriaPrimaPage } from './nova-materia-prima.page';

describe('NovaMateriaPrimaPage', () => {
  let component: NovaMateriaPrimaPage;
  let fixture: ComponentFixture<NovaMateriaPrimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaMateriaPrimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMateriaPrimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

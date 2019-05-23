import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimaPage } from './materia-prima.page';

describe('MateriaPrimaPage', () => {
  let component: MateriaPrimaPage;
  let fixture: ComponentFixture<MateriaPrimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaPrimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPrimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

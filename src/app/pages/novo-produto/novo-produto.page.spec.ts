import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProdutoPage } from './novo-produto.page';

describe('NovoProdutoPage', () => {
  let component: NovoProdutoPage;
  let fixture: ComponentFixture<NovoProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

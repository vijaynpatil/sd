import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartList1Component } from './cart-list1.component';

describe('CartList1Component', () => {
  let component: CartList1Component;
  let fixture: ComponentFixture<CartList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

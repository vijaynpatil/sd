import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCalComponent } from './cart-cal.component';

describe('CartCalComponent', () => {
  let component: CartCalComponent;
  let fixture: ComponentFixture<CartCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

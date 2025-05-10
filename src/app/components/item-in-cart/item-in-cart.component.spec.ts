import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInCartComponent } from './item-in-cart.component';

describe('ItemInCartComponent', () => {
  let component: ItemInCartComponent;
  let fixture: ComponentFixture<ItemInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

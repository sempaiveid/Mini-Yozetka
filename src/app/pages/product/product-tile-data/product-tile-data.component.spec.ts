import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileDataComponent } from './product-tile-data.component';

describe('ProductTileDataComponent', () => {
  let component: ProductTileDataComponent;
  let fixture: ComponentFixture<ProductTileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTileDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

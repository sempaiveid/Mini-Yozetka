import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePriceComponent } from './tile-price.component';

describe('TilePriceComponent', () => {
  let component: TilePriceComponent;
  let fixture: ComponentFixture<TilePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilePriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

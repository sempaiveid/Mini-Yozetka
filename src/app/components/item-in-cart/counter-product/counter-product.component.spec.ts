import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterProductComponent } from './counter-product.component';

describe('CounterProductComponent', () => {
  let component: CounterProductComponent;
  let fixture: ComponentFixture<CounterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

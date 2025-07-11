import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMenuComponent } from './buy-menu.component';

describe('BuyMenuComponent', () => {
  let component: BuyMenuComponent;
  let fixture: ComponentFixture<BuyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

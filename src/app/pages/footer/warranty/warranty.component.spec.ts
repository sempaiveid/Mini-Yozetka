import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyComponent } from './warranty.component';

describe('WarrantyComponent', () => {
  let component: WarrantyComponent;
  let fixture: ComponentFixture<WarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

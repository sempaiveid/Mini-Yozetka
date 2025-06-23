import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusComponent } from './bonus.component';

describe('BonusComponent', () => {
  let component: BonusComponent;
  let fixture: ComponentFixture<BonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

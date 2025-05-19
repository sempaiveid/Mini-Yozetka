import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoputMenuComponent } from './poput-menu.component';

describe('PoputMenuComponent', () => {
  let component: PoputMenuComponent;
  let fixture: ComponentFixture<PoputMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoputMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoputMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

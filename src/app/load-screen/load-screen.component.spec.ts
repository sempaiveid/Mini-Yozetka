import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadScreenComponent } from './load-screen.component';

describe('LoadScreenComponent', () => {
  let component: LoadScreenComponent;
  let fixture: ComponentFixture<LoadScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

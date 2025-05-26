import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitProductComponent } from './commit-product.component';

describe('CommitProductComponent', () => {
  let component: CommitProductComponent;
  let fixture: ComponentFixture<CommitProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

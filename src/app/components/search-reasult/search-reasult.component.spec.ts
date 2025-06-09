import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReasultComponent } from './search-reasult.component';

describe('SearchReasultComponent', () => {
  let component: SearchReasultComponent;
  let fixture: ComponentFixture<SearchReasultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchReasultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReasultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

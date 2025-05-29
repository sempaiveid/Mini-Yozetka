import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatergoryComponent } from './header-catergory.component';

describe('HeaderCatergoryComponent', () => {
  let component: HeaderCatergoryComponent;
  let fixture: ComponentFixture<HeaderCatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCatergoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsComponent } from './quote-details.component';

describe('QuoteDetailsComponent', () => {
  let component: QuoteDetailsComponent;
  let fixture: ComponentFixture<QuoteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

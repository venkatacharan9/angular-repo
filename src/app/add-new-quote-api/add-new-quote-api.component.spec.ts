import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewQuoteAPIComponent } from './add-new-quote-api.component';

describe('AddNewQuoteAPIComponent', () => {
  let component: AddNewQuoteAPIComponent;
  let fixture: ComponentFixture<AddNewQuoteAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewQuoteAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewQuoteAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

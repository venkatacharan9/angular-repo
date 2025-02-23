import { Component } from '@angular/core';
import { AddQuote } from '../models/add-quote.model';
import { QuoteService } from '../services/quote.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-quote-api',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-new-quote-api.component.html',
  styleUrl: './add-new-quote-api.component.css'
})
export class AddNewQuoteAPIComponent {

  quoteModel: AddQuote = new AddQuote('', '', false,'');
  constructor(private quoteService: QuoteService) {}

   onSubmit() {
    this.quoteService.postQuoteData(this.quoteModel).subscribe(
      response => {
        console.log('Quote data posted successfully:', response);
        this.quoteModel = new AddQuote('', '', false, '');
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './quote-details.component.html',
  styleUrl: './quote-details.component.css'
})
export class QuoteDetailsComponent {

  quotes: Quote []=[];
  hallOfFameQuotes: Quote []=[];
  currentIndex = 0;
  userId = 1;
  rating = 1;
  searchQuery='';


  constructor(private quoteService:QuoteService){}

  ngOnInit() {
    this.getQuotes();
    this.getHallOfFameQuotes();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.hallOfFameQuotes.length;
    }, 3000);
  }
  searchQuote() {
    if (this.searchQuery.trim()) {
      console.log(this.searchQuery);
      this.quoteService.searchQuotesByAuthor(this.searchQuery).subscribe(
        (response) => {
          console.log(response);
          this.quotes = response;
        },
        (error) => {
          console.error('Error fetching quotes:', error);
        }
      );
    } else {
      this.quotes = [];
    }
  }

 getQuotes(){
  return this.quoteService.getQuotes().subscribe(data=>{
  this.quotes=data;
  });
}
heartQuote(quote: any) {
  this.quoteService.heartQuote(quote, this.userId, this.rating).subscribe(
    response => {
      console.log('Quote liked successfully:', response);
      this.getQuotes();  
    },
    error => {
      console.error('Error liking the quote:', error);
    }
  );
}

 getHallOfFameQuotes(){
  return this.quoteService.getHallOfFameQuotes().subscribe(data=>{
  this.hallOfFameQuotes=data;
  });
}

}

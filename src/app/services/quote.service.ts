import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';
import { AddQuote } from '../models/add-quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private baseUrl = "http://localhost:8080/api/quotes/";

  constructor(private httpClient : HttpClient) { }

  postQuoteData(data: AddQuote): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}add-source`, data);
  }

  getQuotes():Observable<Quote[]> {
    console.log(`${this.baseUrl}random`);
    return this.httpClient.get<Quote[]>(`${this.baseUrl}random`)
  }

  heartQuote(quote: any, userId: number, rating: number): Observable<any> {
    const author = quote.author || quote.a || quote.character;
    const quoteText=quote.quote || quote.q;
    const payload = {
      quoteText: quoteText,  
      author: author, 
      userId: userId,      
      rating: rating   
    };
 console.log(payload);
    return this.httpClient.post(`${this.baseUrl}vote`, payload);
  }

  getHallOfFameQuotes(limit: number=5):Observable<Quote[]> {
    let url = `${this.baseUrl}halloffame`;
  if (limit) {
    url += `?limit=${encodeURIComponent(limit)}`;
  }
  return this.httpClient.get<Quote[]>(url);
  }

  searchQuotesByAuthor(author: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}random?author=${author}`);
  }
}

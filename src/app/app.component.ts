import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { AddNewQuoteAPIComponent } from './add-new-quote-api/add-new-quote-api.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule,QuoteDetailsComponent,AddNewQuoteAPIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomQuoteGenerator';
}

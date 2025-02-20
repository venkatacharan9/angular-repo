import { provideRouter, Routes } from '@angular/router';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { AddNewQuoteAPIComponent } from './add-new-quote-api/add-new-quote-api.component';

export const routes: Routes = [
    {path : 'quotes',component:QuoteDetailsComponent},
    {path : 'create-quoteApi',component:AddNewQuoteAPIComponent},
    {path : '',redirectTo:'quotes',pathMatch:'full'}
];
import { AddQuote } from './add-quote.model';

describe('AddQuote', () => {
  it('should create an instance', () => {
    expect(new AddQuote('','',false)).toBeTruthy();
  });
});

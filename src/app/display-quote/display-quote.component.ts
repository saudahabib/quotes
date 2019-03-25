import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"You know nothing","By~ Jon Snow", "Submitted by Sauda", new Date(2019,4,25), 0,0),
    new Quote(2,"A man has many faces","By ~Valar Morghulis", "Submitted by Sauda", new Date(2019,4,25),0,0),
    new Quote(3,"Tell Cersei, I want her to know it was me","By ~Lady Margaery", "Submitted by Sauda", new Date(2019,4,25), 0,0),
  ]

  addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.timePassed= new Date (quote.timePassed)
        this.quotes.push(quote)

    }

  clearQuote(eliminate, index)  {
    if(eliminate) {
      this.quotes.splice(index, 1);
    }
  }
  like(quote){
    quote.likes += 1;
  }
  hate(quote){
    quote.hates += 1;
  }
  author(index) {
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;

 }
 submitter(index) {
   this.quotes[index].showSubmitter = !this.quotes[index].showSubmitter;
 }



  constructor() { }

  ngOnInit() {
  }

}

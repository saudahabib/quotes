import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"You know nothing","By~ Jon Snow", "Submitted by Sauda"),
    new Quote(2,"A man has many faces","By ~Valar Morghulis", "Submitted by Sauda"),
    new Quote(3,"Tell Cersei, I want her to know it was me","By ~Lady Margaery", "Submitted by Sauda"),
  ]

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

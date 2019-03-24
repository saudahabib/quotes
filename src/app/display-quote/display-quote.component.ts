import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes= [
    new Quote(1,"You know nothing","Jon Snow","Sauda"),
    new Quote(2,"A man has many faces","Valar Morghulis","James"),
    new Quote(3,"Tell Cersei, I want her to know it was me","Lady Margaery","Kevin"),
  ]
  constructor() { }

  ngOnInit() {
  }

}

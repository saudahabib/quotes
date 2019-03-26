import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-display-quote-details',
  templateUrl: './display-quote-details.component.html',
  styleUrls: ['./display-quote-details.component.css']
})
export class DisplayQuoteDetailsComponent implements OnInit {

  @Input () quote: Quote;
  @Output () eliminate = new EventEmitter<boolean>();


  deleteQuote(complete:boolean){
    this.eliminate.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}

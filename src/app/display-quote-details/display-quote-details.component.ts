import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-display-quote-details',
  templateUrl: './display-quote-details.component.html',
  styleUrls: ['./display-quote-details.component.css']
})
export class DisplayQuoteDetailsComponent implements OnInit {

  @Input () quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}

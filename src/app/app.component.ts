import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes: string[];
  constructor(){
    this.quotes= ["He know nothin","You know nothing Jon snow","I know nothing"]
  }

}

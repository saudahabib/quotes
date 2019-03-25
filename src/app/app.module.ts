import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HeaderComponent } from './header/header.component';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';
import { DisplayQuoteDetailsComponent } from './display-quote-details/display-quote-details.component';
import { TimeCountPipe } from './time-count.pipe';
import { TimecountPipe } from './timecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    HeaderComponent,
    DisplayQuoteComponent,
    DisplayQuoteDetailsComponent,
    TimeCountPipe,
    TimecountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

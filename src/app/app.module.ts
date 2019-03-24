import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HeaderComponent } from './header/header.component';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    HeaderComponent,
    DisplayQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

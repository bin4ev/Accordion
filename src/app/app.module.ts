import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionSectionComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

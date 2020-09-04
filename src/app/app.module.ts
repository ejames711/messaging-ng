import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { BannerComponent } from './banner/banner.component';
import { MessageEntryComponent } from './message-entry/message-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageDisplayComponent,
    BannerComponent,
    MessageEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

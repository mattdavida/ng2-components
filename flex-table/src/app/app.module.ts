import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './app.service';
import { FlexTableComponent } from './components/flex-table.component';
import { WindowRef } from './services/window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    FlexTableComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FlexTableComponent,
  ],
  providers: [
    DataService,
    WindowRef]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }

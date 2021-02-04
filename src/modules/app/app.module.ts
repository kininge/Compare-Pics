import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'src/modules/app/components/app/app.component';
import { FootComponent } from 'src/modules/app/components/foot/foot.component';
import { PicStackComponent } from './components/pic-stack/pic-stack.component';
import { CompareTableComponent } from './components/compare-table/compare-table.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    FootComponent,
    PicStackComponent,
    CompareTableComponent
  ],
  imports: 
  [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

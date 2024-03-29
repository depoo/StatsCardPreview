import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatCardModule } from './statCard/statCard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TitleComponent } from './title/title.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { StadisticComponent } from './stadistic/stadistic.component';

@NgModule({
  declarations: [
    TitleComponent,
    ParagraphComponent,
    StadisticComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TitleComponent,
    ParagraphComponent,
    StadisticComponent
  ],
  providers: [],
})
export class StatCardModule { }

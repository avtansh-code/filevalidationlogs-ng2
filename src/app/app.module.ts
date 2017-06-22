import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { AccordionModule} from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { FileTabs } from './filetabscomponent/filetabs.component';
import { AppComponent } from './appcomponent/app.component';
import { AccordionView } from './accordionviewcomponent/accordionview.component';
import { ListView } from './listviewcomponent/listview.component';

import { DataExchangeService } from './services/dataexchange.service';
import { DataManipulationService } from './services/datamanipulation.service';


@NgModule({
  declarations: [
    AppComponent,
    FileTabs,
    AccordionView,
    ListView
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [DataExchangeService, DataManipulationService],
  bootstrap: [AppComponent]
})
export class FileValidationLogs {

 }

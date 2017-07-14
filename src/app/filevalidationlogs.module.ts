import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { AccordionModule} from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FileTabs } from './filetabscomponent/filetabs.component';
import { AccordionView } from './accordionviewcomponent/accordionview.component';
import { ListView } from './listviewcomponent/listview.component';

import { DataExchangeService } from './services/dataexchange.service';
import { DataManipulationService } from './services/datamanipulation.service';


@NgModule({
  declarations: [
    FileTabs,
    AccordionView,
    ListView
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports: [
    FileTabs,
    AccordionView,
    ListView
  ],
  providers: [DataExchangeService, DataManipulationService]
})
export class FileValidationLogsModule {

 }

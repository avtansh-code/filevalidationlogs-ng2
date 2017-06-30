import { NgModule } from '@angular/core';
import { FileValidationLogsModule } from './filevalidationlogs.module';
import { AppComponent } from './appcomponent/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FileValidationLogsModule
  ],
  bootstrap: [AppComponent]
})
export class FileValidationLogs {

 }

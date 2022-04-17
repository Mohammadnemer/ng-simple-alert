import { NgModule } from '@angular/core';
import { NgSimpleAlertComponent } from './ng-simple-alert.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    NgSimpleAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgSimpleAlertComponent
  ]
})
export class NgSimpleAlertModule { }

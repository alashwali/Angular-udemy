import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { warningAlertComponent } from './warningAlert/warningAlert.component';
import{ successAlertComponent} from './successAlert/successAlert.component'

@NgModule({
  declarations: [AppComponent, warningAlertComponent,successAlertComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

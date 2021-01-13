import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    //FormsModule is required for ngModel
    FormsModule,
    ServersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

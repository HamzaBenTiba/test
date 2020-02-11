import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPrintModule} from 'ngx-print';
import {FormsModule} from '@angular/Forms';
import { TicketTvComponent } from './ticket-tv/ticket-tv.component';
import { TicketMachineAlaveComponent } from './ticket-machine-alave/ticket-machine-alave.component';
import { TicketFrigidaireComponent } from './ticket-frigidaire/ticket-frigidaire.component';
import { TicketNormaleComponent } from './ticket-normale/ticket-normale.component';
import { TicketMiniComponent } from './ticket-mini/ticket-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketTvComponent,
    TicketMachineAlaveComponent,
    TicketFrigidaireComponent,
    TicketNormaleComponent,
    TicketMiniComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

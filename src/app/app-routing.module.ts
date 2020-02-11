import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketTvComponent } from './ticket-tv/ticket-tv.component';
import { TicketFrigidaireComponent } from './ticket-frigidaire/ticket-frigidaire.component';
import { TicketMachineAlaveComponent } from './ticket-machine-alave/ticket-machine-alave.component';
import { TicketNormaleComponent } from './ticket-normale/ticket-normale.component';
import { TicketMiniComponent } from './ticket-mini/ticket-mini.component';

const routes: Routes = [
  {path:'tv',component:TicketTvComponent},
  {path:'frg',component:TicketFrigidaireComponent},
  {path:'mal',component:TicketMachineAlaveComponent},
  {path:'normale',component:TicketNormaleComponent},
  {path:'mini',component:TicketMiniComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

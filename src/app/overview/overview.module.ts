import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashOverviewComponent } from './dash-overview/dash-overview.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';



@NgModule({
  declarations: [
    DashOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }

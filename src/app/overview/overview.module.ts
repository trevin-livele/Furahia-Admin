import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { DashOverviewComponent } from './dash-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashOverviewComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }

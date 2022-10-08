import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance.component';
import { BrandperformnceComponent } from './brandperformnce/brandperformnce.component';
import { SharedModule } from '../shared/shared.module';
import { PerformanceRoutingModule } from './performance-routing.module';



@NgModule({
  declarations: [
    PerformanceComponent,
    BrandperformnceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerformanceRoutingModule,
  ]
})
export class PerformanceModule { }

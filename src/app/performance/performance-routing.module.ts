import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandperformnceComponent } from './brandperformnce/brandperformnce.component';
import { PerformanceComponent } from './performance.component';


const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
    children: [
      { path: 'brandperformance', component: BrandperformnceComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashOverviewComponent } from './dash-overview/dash-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DashOverviewComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class OverviewRoutingModule {}

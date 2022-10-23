import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashOverviewComponent } from './dash-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashOverviewComponent,
    children: [
      { path: 'dashoverview', component: DashboardComponent },
    ],
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class OverviewRoutingModule {}

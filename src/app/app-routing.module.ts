import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  
  {
    path: 'overview',
    canActivate: [],
    loadChildren: ()=> import('./overview/overview.module').then((m)=>m.OverviewModule)
  },

  {
    path: 'auth',
    canActivate: [],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'performance',
    canActivate: [],
    loadChildren: () =>
      import('./performance/performance.module').then((m) => m.PerformanceModule),
  },

  {
    path: 'revenue',
    canActivate: [],
    loadChildren: () =>
      import('./revenue/revenue.module').then((m) => m.RevenueModule),
  },
  {
    path: 'settings',
    canActivate: [],
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'trade',
    canActivate: [],
    loadChildren: () =>
      import('./trade/trade.module').then((m) => m.TradeModule),
  },
  {
    path: 'transaction',
    canActivate: [],
    loadChildren: () =>
      import('./transaction/transaction.module').then((m) => m.TransactionModule),
  },

  { path: '**', component: PageNotFoundComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




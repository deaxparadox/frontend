import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DoubleRingComponent } from './css/loading/double-ring/double-ring.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PmsHomeComponent } from './pms/component/pms-home/pms-home.component';

const routes: Routes = [
  {
    path: 'double-ring', component: DoubleRingComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'pms', component: PmsHomeComponent
  },
  {
    path: "", redirectTo: "/dashboard", pathMatch: 'full'
  },
  {
    path : "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DoubleRingComponent } from './css/loading/double-ring/double-ring.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'double-ring', component: DoubleRingComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: "", redirectTo: "/dashboard", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

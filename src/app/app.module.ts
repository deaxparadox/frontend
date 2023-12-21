import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvFloatComponent } from './navbar/nv-float/nv-float.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoubleRingComponent } from './css/loading/double-ring/double-ring.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PmsHomeComponent } from './pms/component/pms-home/pms-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PmsHeadingDetailComponent } from './pms/component/heading/pms-heading-detail/pms-heading-detail.component';
import { PmsNavbarComponent } from './pms/component/pms-navbar/pms-navbar.component';
import { PmsHeadingCreateComponent } from './pms/component/heading/pms-heading-create/pms-heading-create.component';
import { PmsHeadingUpdateComponent } from './pms/component/heading/pms-heading-update/pms-heading-update.component';
import { PmsTaskUpdateComponent } from './pms/component/task/pms-task-update/pms-task-update.component';
import { PmsTaskCreateComponent } from './pms/component/task/pms-task-create/pms-task-create.component';
import { PmsTaskDetailComponent } from './pms/component/task/pms-task-detail/pms-task-detail.component';
import { PmsTasksComponent } from './pms/component/task/pms-tasks/pms-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NvFloatComponent,
    DoubleRingComponent,
    DashboardComponent,
    PmsHomeComponent,
    PageNotFoundComponent,
    PmsHeadingDetailComponent,
    PmsNavbarComponent,
    PmsHeadingCreateComponent,
    PmsHeadingUpdateComponent,
    PmsTaskUpdateComponent,
    PmsTaskCreateComponent,
    PmsTaskDetailComponent,
    PmsTasksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

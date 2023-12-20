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

@NgModule({
  declarations: [
    AppComponent,
    NvFloatComponent,
    DoubleRingComponent,
    DashboardComponent,
    PmsHomeComponent,
    PageNotFoundComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsWorkersCompComponent } from './basics-workers-comp/basics-workers-comp.component';
import { SharedWorkerCompComponent } from './shared-worker-comp/shared-worker-comp.component';
import { WebWorkerCompComponent } from './web-worker-comp/web-worker-comp.component';
import { ServiceWorkerCompComponent } from './service-worker-comp/service-worker-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsWorkersCompComponent,
    SharedWorkerCompComponent,
    WebWorkerCompComponent,
    ServiceWorkerCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

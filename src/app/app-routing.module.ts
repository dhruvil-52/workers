import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsWorkersCompComponent } from './basics-workers-comp/basics-workers-comp.component';
import { ServiceWorkerCompComponent } from './service-worker-comp/service-worker-comp.component';
import { WebWorkerCompComponent } from './web-worker-comp/web-worker-comp.component';
import { SharedWorkerCompComponent } from './shared-worker-comp/shared-worker-comp.component';

const routes: Routes = [
  {
    path: '', component: BasicsWorkersCompComponent
  },
  {
    path: 'web-worker', component: WebWorkerCompComponent
  },
  {
    path: 'shared-worker', component: SharedWorkerCompComponent
  },
  {
    path: 'service-worker', component: ServiceWorkerCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsWorkersCompComponent } from './basics-workers-comp/basics-workers-comp.component';

const routes: Routes = [
  {
    path: '', component: BasicsWorkersCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

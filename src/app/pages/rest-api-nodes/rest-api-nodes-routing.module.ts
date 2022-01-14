import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestApiNodesComponent } from './rest-api-nodes.component';

const routes: Routes = [
  {
    path: '',
    component: RestApiNodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

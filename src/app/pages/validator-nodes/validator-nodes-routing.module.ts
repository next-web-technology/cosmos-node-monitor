import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorNodesComponent } from './validator-nodes.component';

const routes: Routes = [
  {
    path: '',
    component: ValidatorNodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatorNodesRoutingModule {}

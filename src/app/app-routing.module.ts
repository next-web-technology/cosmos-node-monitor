import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/validator-nodes/validator-nodes.module').then(
        (m) => m.ValidatorNodesModule
      ),
  },
  {
    path: 'rest-api-nodes',
    loadChildren: () =>
      import('./pages/rest-api-nodes/rest-api-nodes.module').then(
        (m) => m.RestApiNodesModule
      ),
  },
  {
    path: 'validator-nodes',
    loadChildren: () =>
      import('./pages/validator-nodes/validator-nodes.module').then(
        (m) => m.ValidatorNodesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

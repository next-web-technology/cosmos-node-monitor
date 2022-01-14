import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/rest-api-nodes/rest-api-nodes.module').then(
        (m) => m.RestApiNodesModule
      ),
  },
  {
    path: 'rest-api-nodes',
    loadChildren: () =>
      import('./pages/rest-api-nodes/rest-api-nodes.module').then(
        (m) => m.RestApiNodesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

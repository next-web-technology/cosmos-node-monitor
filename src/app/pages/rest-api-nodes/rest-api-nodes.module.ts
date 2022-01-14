import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './rest-api-nodes-routing.module';
import { ViewRestApiNodesModule } from 'src/app/views/rest-api-nodes/rest-api-nodes.module';
import { RestApiNodesComponent } from './rest-api-nodes.component';

@NgModule({
  declarations: [RestApiNodesComponent],
  imports: [CommonModule, HomeRoutingModule, ViewRestApiNodesModule],
})
export class RestApiNodesModule {}

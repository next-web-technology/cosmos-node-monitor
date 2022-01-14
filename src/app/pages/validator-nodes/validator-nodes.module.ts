import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorNodesRoutingModule } from './validator-nodes-routing.module';
import { ValidatorNodesComponent } from './validator-nodes.component';
import { ViewValidatorNodesModule } from 'src/app/views/validator-nodes/validator-nodes.module';

@NgModule({
  declarations: [ValidatorNodesComponent],
  imports: [
    CommonModule,
    ValidatorNodesRoutingModule,
    ViewValidatorNodesModule,
  ],
})
export class ValidatorNodesModule {}

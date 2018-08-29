import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PricingRulesRoutingModule } from './pricing-rules.routing.module';
import { PricingRulesListComponent } from './components/pricing-rules-list/pricing-rules-list.component';
import { PricingRulesEditComponent } from './components/pricing-rules-edit/pricing-rules-edit.component';
import { PricingRulesService } from './services/pricing-rules.service';
import { CustomerModule } from '../customer/customer.module';
import { ProductModule } from '../products/product.module';

const COMPONENTS = [
    PricingRulesListComponent,
    PricingRulesEditComponent ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomerModule,
    ProductModule,
    PricingRulesRoutingModule
  ],
  providers: [PricingRulesService],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class PricingRulesModule { }

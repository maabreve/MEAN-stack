import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingRulesListComponent, PricingRulesEditComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: PricingRulesListComponent
  },
    {
      path: 'new',
      component: PricingRulesEditComponent
    },
    {
      path: 'edit/:id',
      component: PricingRulesEditComponent
    }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PricingRulesRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { PricingRulesService } from '../../services/pricing-rules.service';
import { PricingRulesModel } from '../../models/pricing-rules.model';

@Component({
  selector: 'app-pricing-rules-list',
  templateUrl: './pricing-rules-list.component.html',
  styleUrls: ['./pricing-rules-list.component.css']
})
export class PricingRulesListComponent implements OnInit {

  pricingRulesList: PricingRulesModel[];

  constructor(private pricingRulesService: PricingRulesService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.pricingRulesService.getAll().subscribe(prl => {
      this.pricingRulesList = prl;
    });
  }
}

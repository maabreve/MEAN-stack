import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomerModel, CustomerService } from '../../../customer';
import { ProductModel, ProductService } from '../../../products';
import { PricingRulesModel } from '../../models/pricing-rules.model';
import { PricingRulesService } from '../../services/pricing-rules.service';

@Component({
  selector: 'app-pricing-rules-edit',
  templateUrl: './pricing-rules-edit.component.html',
  styleUrls: ['./pricing-rules-edit.component.css']
})

export class PricingRulesEditComponent implements OnInit {
  clientList: Array<CustomerModel>;
  productList: Array<ProductModel>;
  model: PricingRulesModel;
  @ViewChild('customerSelect') customerSelect: ElementRef;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private pricingRulesService: PricingRulesService,
    private customerService: CustomerService,
    private productService: ProductService) {

  }

  ngOnInit() {
    this.loadEntity();
    this.loadSelects();
  }

  loadEntity() {
    this.model = new PricingRulesModel();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pricingRulesService.getById(id).subscribe(prs => {
        this.model = prs;
        console.log(prs);
      });
    }
  }

  onSubmit() {
    this.model.customerName = this.clientList.find(c => c._id === this.model.customerId).name;
    this.model.productCode = this.productList.find(p => p._id === this.model.productId).code;
    console.log(this.model);

    if (this.model._id) {
      this.pricingRulesService.update(this.model._id, this.model).subscribe(prs => {
        this.router.navigate(['/pricing-rules']);
      });
    } else {
      this.pricingRulesService.create(this.model).subscribe(prs => {
        this.router.navigate(['/pricing-rules']);
      });
    }
  }

  loadSelects() {
    this.customerService.getAll().subscribe(clientList => {
      this.clientList = clientList;
    });

    this.productService.getAll().subscribe(productList => {
      this.productList = productList;
    });
  }
}

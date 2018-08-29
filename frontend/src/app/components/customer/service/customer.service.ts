import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../base-service/base.service';
import { CustomerModel } from '../model/customer.model';
import { CONFIG } from '../../../config/app.config';

@Injectable()

export class CustomerService extends BaseService<CustomerModel> {
  constructor(http: HttpClient) {
    super(http, CONFIG.apiURL + 'customers');
  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../base-service/base.service';
import { PricingRulesModel } from '../models/pricing-rules.model';
import { CONFIG } from '../../../config/app.config';

@Injectable()

export class PricingRulesService extends BaseService<PricingRulesModel> {
  constructor(http: HttpClient) {
    super(http, CONFIG.apiURL + 'pricing-rules/');
  }
}

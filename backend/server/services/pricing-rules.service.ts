import promise from "promise";

import IPricingRulesModel from '../models/pricing-rules.model';
import { BaseService } from "./base/base.service";

export class PricingRulesService extends BaseService<IPricingRulesModel>  {
    public getByClient(params: any) {
        let p = new promise<IPricingRulesModel[]>((resolve, reject) => {
            this._repo.getAll(params).exec((err: any, res: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res);
                    }
                    else {
                        resolve(undefined);
                    }
                }
            });
        });

        return p;
    }
}

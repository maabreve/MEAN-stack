/**
 * ProductController
 */
import express = require("express");
import { BaseController } from './base/base.controller';

export class ProductController<T> extends BaseController<T> {
    
    public getByCode(req: express.Request, res: express.Response) {
        const params = { code: req.params.code };
        if (!params) {
            this._sendReponse(res, httpStatus.OK, 'Not found!');
        } else {
            this._baseService.getAll(params)
                .then(items => {
                    res.json(items).status(200);
                })
                .catch(err => console.error.bind(console, `Error ${err}`))
        }
    }
}

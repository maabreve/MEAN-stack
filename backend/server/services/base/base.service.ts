/**
 * Base service
 * CRUD entity operations
 */
import mongoose = require("mongoose");
import promise from "promise";

import { IService } from './iservice';
import { IRepository } from '../../repositories/base/irepository';

export class BaseService<T extends mongoose.Document> implements IService<T> {
    protected _repo: IRepository<T>;

    constructor(repo: IRepository<T>) {
        this._repo = repo;
    }

    create(item: T): promise<T> {
        let p = new promise<T>((resolve, reject) => {
            this._repo.create(item, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });

        return p;
    }

    getAll(cond?: Object, fields?: Object, options?: Object): promise<T[]> {
        let p = new promise<T[]>((resolve, reject) => {
            this._repo.getAll(cond, fields, options).exec((err: any, res: any) => {
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

    getById(_id: string): promise<T> {
        let p = new promise<T>((resolve, reject) => {
            this._repo.getById(_id).limit(1).exec((err: any, res: any) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    }

    update(_id: string, item: T): promise<T> {
        let p = new promise<T>((resolve, reject) => {
            this._repo.update(_id, item, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });

        return p;
    }

    delete(_id: string): promise<T> {
        let p = new promise<T>((resolve, reject) => {
            this._repo.delete(_id, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });

        return p;
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
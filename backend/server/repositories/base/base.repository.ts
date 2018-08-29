/**
 * Base Repository
 * CRUD entity operations
 */
import mongoose = require("mongoose");
import { IRepository } from './irepository';

export class BaseRepository<T extends mongoose.Document> implements IRepository<T> {
    protected _model: mongoose.Model<mongoose.Document>;
    
    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create(item: T, callback?: (error: any, result: T) => void): any {
        return this._model.create(item, callback);
    }

    update(_id: string, item: T, callback?: (error: any, result: any) => void): any {
        return this._model.update({ _id: this.toObjectId(_id) }, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void): any {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    getAll(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void):any {
        return this._model.find(cond, options, callback);
    }
 
    getById(_id: string, callback?: (error: any, result: T) => void): any {
        return this._model.findById({ _id: this.toObjectId(_id)}, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
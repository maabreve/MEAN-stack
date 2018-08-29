import mongoose = require("mongoose");

export interface IRepository<T> {
    getAll(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
    getById(_id: string, callback?: (error: any, result: T) => void): mongoose.Query<T>;
    create: (item: T, callback?: (error: any, result: any) => void) => void;
    update: (_id: string, item: T, callback?: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

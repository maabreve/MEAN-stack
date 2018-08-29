import promise from "promise";

export interface IService<T> {
    getAll(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): promise<T[]>;
    getById(_id: string, callback?: (error: any, result: T) => void): promise<T>;
    create(item: T, callback?: (error: any, result: any) => void): promise<T>;
    update(_id: string, item: T, callback?: (error: any, result: any) => void): promise<T>;
    delete(_id: string, callback?: (error: any, result: any) => void): promise<T>;
}

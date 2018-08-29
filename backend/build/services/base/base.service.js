"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base service
 * CRUD entity operations
 */
var mongoose = require("mongoose");
var promise_1 = __importDefault(require("promise"));
var BaseService = /** @class */ (function () {
    function BaseService(repo) {
        this._repo = repo;
    }
    BaseService.prototype.create = function (item) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.create(item, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    BaseService.prototype.getAll = function (cond, fields, options) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.getAll(cond, fields, options).exec(function (err, res) {
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
    };
    BaseService.prototype.getById = function (_id) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.getById(_id).limit(1).exec(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    BaseService.prototype.update = function (_id, item) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.update(_id, item, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    BaseService.prototype.delete = function (_id) {
        var _this = this;
        var p = new promise_1.default(function (resolve, reject) {
            _this._repo.delete(_id, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    BaseService.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return BaseService;
}());
exports.BaseService = BaseService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var promise = require("promise");
var BaseService = /** @class */ (function () {
    function BaseService(repo) {
        this._repo = repo;
    }
    BaseService.prototype.create = function (item) {
        var _this = this;
        var p = new promise(function (resolve, reject) {
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
    BaseService.prototype.update = function (_id, item) {
    };
    BaseService.prototype.delete = function (_id) {
    };
    BaseService.prototype.find = function () {
        var _this = this;
        var p = new promise(function (resolve, reject) {
            _this._repo.find(cond, fields, options).exec(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(undefined);
                    }
                }
            });
        });
        return p;
    };
    BaseService.prototype.findById = function (_id) {
        var _this = this;
        var p = new promise(function (resolve, reject) {
            _this._repo.findById(_id).limit(1).exec(function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(undefined);
                    }
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

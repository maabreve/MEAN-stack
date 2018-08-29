"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base Repository
 * CRUD entity operations
 */
var mongoose = require("mongoose");
var BaseRepository = /** @class */ (function () {
    function BaseRepository(schemaModel) {
        this._model = schemaModel;
    }
    BaseRepository.prototype.create = function (item, callback) {
        return this._model.create(item, callback);
    };
    BaseRepository.prototype.update = function (_id, item, callback) {
        return this._model.update({ _id: this.toObjectId(_id) }, item, callback);
    };
    BaseRepository.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    BaseRepository.prototype.getAll = function (cond, fields, options, callback) {
        return this._model.find(cond, options, callback);
    };
    BaseRepository.prototype.getById = function (_id, callback) {
        return this._model.findById({ _id: this.toObjectId(_id) }, callback);
    };
    BaseRepository.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;

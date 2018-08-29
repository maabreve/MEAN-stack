"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var httpStatus = __importStar(require("http-status"));
var BaseController = /** @class */ (function () {
    function BaseController(baseService) {
        this._sendReponse = function (res, statusCode, data) {
            res.status(statusCode).json(data);
        };
        this._baseService = baseService;
    }
    BaseController.prototype.getAll = function (req, res) {
        var _this = this;
        this._baseService.getAll()
            .then(function (item) {
            _this._sendReponse(res, httpStatus.OK, item);
        })
            .catch(function (err) { return console.error.bind(console, "Error " + err); });
    };
    BaseController.prototype.getById = function (req, res) {
        var _this = this;
        var _id = { id: req.params.id };
        if (!_id) {
            this._sendReponse(res, httpStatus.OK, 'Not found!');
        }
        else {
            this._baseService
                .getById(_id.id)
                .then(function (items) { return _this._sendReponse(res, httpStatus.OK, items); })
                .catch(function (err) { return console.error.bind(console, "Error " + err); });
        }
    };
    BaseController.prototype.create = function (req, res) {
        var _this = this;
        this._baseService
            .create(req.body)
            .then(function (menus) { return _this._sendReponse(res, httpStatus.CREATED, menus); })
            .catch(function (err) { return console.error.bind(console, "Error " + err); });
    };
    BaseController.prototype.update = function (req, res) {
        var _this = this;
        if (!req.body._id) {
            this._sendReponse(res, httpStatus.OK, 'Item not found!');
        }
        else {
            this._baseService
                .update(req.body._id, req.body)
                .then(function (menus) { return _this._sendReponse(res, httpStatus.CREATED, menus); })
                .catch(function (err) { return console.error.bind(console, "Error " + err); });
        }
    };
    BaseController.prototype.delete = function (req, res) {
        var _this = this;
        var _id = { id: req.params.id };
        if (!_id) {
            this._sendReponse(res, httpStatus.OK, 'Item not found!');
        }
        else {
            this._baseService
                .delete(_id.id)
                .then(function (menus) { return _this._sendReponse(res, httpStatus.CREATED, menus); })
                .catch(function (err) { return console.error.bind(console, "Error " + err); });
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;

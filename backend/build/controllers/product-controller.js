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
var ProductController = /** @class */ (function () {
    function ProductController(productService) {
        this.sendReponse = function (res, statusCode, data) {
            res.status(statusCode).json({ 'result': data });
        };
        this._productService = productService;
    }
    ProductController.prototype.getAll = function (req, res) {
        var _this = this;
        this._productService.find()
            .then(function (product) { return _this.sendReponse(res, httpStatus.OK, product); })
            .catch(function (err) { return console.error.bind(console, "Error " + err); });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
// getById(req: any, res: any) {
//     const _id = { id: req.params.id };
//     if (!_id) {
//         this.sendReponse(res, httpStatus.OK, 'Product not found!');
//     } else {
//         this._productService
//             .findByName(req.params.id)
//             .then(programs => sendReponse(res, httpStatus.OK, programs))
//             .catch(err => console.error.bind(console, `Error ${err}`))
//     }
// }
//     create(req, res) {
//         UserRepository
//             .create(req.body)
//             .then(menus => sendReponse(res, httpStatus.CREATED, menus))
//             .catch(err => console.error.bind(console, `Error ${err}`))
//     }
//     update(req, res) {
//         const _id = { id: req.params.id };
//         if (req.body.length == 0) {
//             return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
//         }
//         UserRepository
//             .update(_id, req.body)
//             .then(user => sendReponse(res, httpStatus.OK, user))
//             .catch(err => console.error.bind(console, `Error ${err}`));
//     }
//     delete(req, res) {
//         if (!req.params.id) {
//             return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
//         }
//         UserRepository
//             .delete(req.params.id)
//             .then(user => sendReponse(res, httpStatus.OK, `User  ${user.name} deleted with success!`))
//             .catch(err => console.error.bind(console, `Error ${err}`));
//     }
// import * as httpStatus from 'http-status';
// import { ProductService } from '../services/product-service';
// import { ProductModel } from '../models/product';
// export class ProductController {
//     private _productService: ProductService;
//     const sendReponse = function (res: any, statusCode: any, data: any) {
//         res.status(statusCode).json({ 'result': data })
//     }
// class ProductController {
//     constructor(productService: ProductService) {
//         this._productService = productService;
//     }
//     get(req: any, res: any) {
//         _productRepository.find()
//             .then(product => sendReponse(res, httpStatus.OK, user))
//             .catch(err => console.error.bind(console, `Error ${err}`))
//     }
//     getById(req, res) {
//         const _id = { id: req.params.id };
//         if (!_id) {
//             sendReponse(res, httpStatus.OK, 'user not found!');
//         } else {
//             UserRepository
//                 .getById(req.params.id)
//                 .then(programs => sendReponse(res, httpStatus.OK, programs))
//                 .catch(err => console.error.bind(console, `Error ${err}`))
//         }
//     }
//     create(req, res) {
//         UserRepository
//             .create(req.body)
//             .then(menus => sendReponse(res, httpStatus.CREATED, menus))
//             .catch(err => console.error.bind(console, `Error ${err}`))
//     }
//     update(req, res) {
//         const _id = { id: req.params.id };
//         if (req.body.length == 0) {
//             return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
//         }
//         UserRepository
//             .update(_id, req.body)
//             .then(user => sendReponse(res, httpStatus.OK, user))
//             .catch(err => console.error.bind(console, `Error ${err}`));
//     }
//     delete(req, res) {
//         if (!req.params.id) {
//             return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
//         }
//         UserRepository
//             .delete(req.params.id)
//             .then(user => sendReponse(res, httpStatus.OK, `User  ${user.name} deleted with success!`))
//             .catch(err => console.error.bind(console, `Error ${err}`));
//     }
// }

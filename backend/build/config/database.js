"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database(mongoose) {
        this.uri = 'mongodb://localhost:27017/catho';
        mongoose.Promise = global.Promise;
        this.connection = mongoose.connect(this.uri, { useMongoClient: true });
    }
    Database.prototype.closeConnection = function (message, callback) {
        this.connection.close(function () {
            console.log("Mongoose was desconeted by: " + message);
            callback();
        });
    };
    return Database;
}());
exports.default = Database;

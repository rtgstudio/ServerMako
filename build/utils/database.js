"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var logger_1 = require("./logger");
var DatabaseBackup = /** @class */ (function (_super) {
    __extends(DatabaseBackup, _super);
    function DatabaseBackup(config, databaseType) {
        var _this = _super.call(this, 'log.txt') || this;
        if (databaseType = interface_1.DATABASETYPE.MYSQL) {
            _this.mysqlConfig = config;
        }
        if (databaseType = interface_1.DATABASETYPE.PSQL) {
            _this.psqlConfig = config;
        }
        if (databaseType = interface_1.DATABASETYPE.MYSQL) {
            _this.mongoConfig = config;
        }
        return _this;
    }
    DatabaseBackup.prototype.uploadZip = function () {
        this.logger('initiated logger');
    };
    DatabaseBackup.prototype.backup = function () {
    };
    return DatabaseBackup;
}(logger_1.makoLogger));
exports.DatabaseBackup = DatabaseBackup;

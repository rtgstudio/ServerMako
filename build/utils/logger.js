"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var log_to_file_1 = __importDefault(require("log-to-file"));
var makoLogger = /** @class */ (function () {
    function makoLogger(fileName) {
        this.fileName = fileName;
    }
    makoLogger.prototype.logger = function (message) {
        log_to_file_1.default(message, this.fileName);
    };
    return makoLogger;
}());
exports.makoLogger = makoLogger;

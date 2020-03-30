"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./utils/database");
var interface_1 = require("./utils/interface");
console.log('servermako-cli');
var makoBackup = new database_1.DatabaseBackup({ connectionUrl: 'localhost:200' }, interface_1.DATABASETYPE.MONGODB);
makoBackup.uploadZip();

import { DatabaseBackup } from './utils/database';
import { DATABASETYPE } from './utils/interface';
console.log('servermako-cli');
const makoBackup= new DatabaseBackup({connectionUrl:'localhost:200'},DATABASETYPE.MONGODB)
makoBackup.uploadZip();
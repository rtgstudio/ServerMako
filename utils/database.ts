import {IMYSQLConfig,IPSQLConfig,IMongoDBConfig, DatabaseConnectionConfig, DATABASETYPE} from './interface'
import {makoLogger} from './logger'

export class DatabaseBackup  extends makoLogger{
    private mysqlConfig:IMYSQLConfig | undefined
    private psqlConfig:IPSQLConfig| undefined
    private mongoConfig:IMongoDBConfig| undefined

    constructor(config:DatabaseConnectionConfig,databaseType: DATABASETYPE){
        super('log.txt')
        
        if(databaseType=DATABASETYPE.MYSQL){
            this.mysqlConfig=config as IMYSQLConfig
        }
        if(databaseType=DATABASETYPE.PSQL){
            this.psqlConfig=config as IPSQLConfig
        }
        if (databaseType=DATABASETYPE.MYSQL){
            this.mongoConfig= config as IMongoDBConfig
        }
        
    }
  
    public uploadZip(){
        this.logger('initiated logger')
    }

    public backup() {
    }
}
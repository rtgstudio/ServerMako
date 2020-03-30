
export interface IMYSQLConfig {
    host:string,
    username:string,
    password:string,
    port:number
}

export interface IPSQLConfig {
    host:string,
    username:string,
    password:string,
    port:number
}

export interface IMongoDBConfig {
    connectionUrl:string
}

export type DatabaseConnectionConfig = IMYSQLConfig | IPSQLConfig |IMongoDBConfig

export enum DATABASETYPE {
 MYSQL,
 PSQL,
 MONGODB
}
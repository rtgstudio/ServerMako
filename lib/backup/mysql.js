const mysqldump = require('mysqldump')
const rimraf= require('rimraf');

module.exports = {
    backup: async(hostname,dbname,username,password,dumpfilename,port) => {
      extension='.sql'
       try{
        await mysqldump({
            connection: {
                host: hostname,
                user: username,
                password: password,
                database: dbname,
                port
            },
            dumpToFile: dumpfilename + extension,
        })  
    }
    catch(e){
        console.log('Error Occured while backing up:  ' + e.message)
        rimraf(dumpfilename+extension);
    } 
    }};
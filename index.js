const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const pjson = require('./package.json');
const version = require('./lib/getVersion')
const inquirer  = require('./lib/inquirer');
const si = require('systeminformation');
const mysqlBackup= require('./lib/backup/mysql');

const setDbBackup = async () => {
  const credentials = await inquirer.askMysqlDbCredentials()
  console.log(credentials);
  await mysqlBackup.backup(credentials.hostname,credentials.dbName,credentials.dbuser,credentials.password,credentials.dumpfilename)
};




var argv = require('minimist')(process.argv.slice(2));
   if(argv._[0] =='version'){  
    version.getVersion();
   }

   else if(argv._[0]=='backup'){
     if(argv.add){
      setDbBackup()
     }
   }
   else{

    console.log(
      chalk.yellow(
        figlet.textSync('ServerMako', { horizontalLayout: 'full' }) +
        pjson.version
      )
    );
    
    console.log(
        chalk.white(
         'servermako usage servermako [--version]'
        )
      );
     
   }


  

 


//   run();

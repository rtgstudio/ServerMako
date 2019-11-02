const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const pjson = require('./package.json');
const version = require('./lib/getVersion')
const inquirer  = require('./lib/inquirer');
const si = require('systeminformation');





var argv = require('minimist')(process.argv.slice(2));
   if(argv._[0] =='version'){  
    version.getVersion();
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


  

 

// const run = async () => {
//     const credentials = await inquirer.askGithubCredentials();
//     console.log(credentials);
//   };
  
//   run();

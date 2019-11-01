const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const pjson = require('./package.json');
const express = require("express");
const inquirer  = require('./lib/inquirer');
const si = require('systeminformation');
app = express();

clear();

console.log(
  chalk.redBright(
    figlet.textSync('ServerMako', { horizontalLayout: 'full' }) +
    pjson.version
  )
);

console.log(
    chalk.yellow(
      '\n 1 >> Setup \n 2 >> Add Database \n 3 >> System Information'
    )
  );
  app.listen(3128);

// const run = async () => {
//     const credentials = await inquirer.askGithubCredentials();
//     console.log(credentials);
//   };
  
//   run();

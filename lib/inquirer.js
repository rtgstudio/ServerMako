const inquirer = require('inquirer');



module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'panelInput',
        type: 'input',
        message: 'Choose a action to perform:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};

module.exports = {
  askMysqlDbCredentials: () => {
    const questions = [
      {
        name: 'hostname',
        type: 'input',
        message: 'Input hostname with port eg(http://localhost:3306)',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      },
      {
        name: 'dbName',
        type: 'input',
        message: 'Enter Database Name',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      },
      {
        name: 'dbuser',
        type: 'input',
        message: 'Enter User ',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      },
      {
        name: 'password',
        type: 'input',
        message: 'Enter db password',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      },
      {
        name: 'dumpfilename',
        type: 'input',
        message: 'Enter dump filename',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      },
      {
        name: 'port',
        type: 'input',
        message: 'Enter port Number',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please choose an option';
          }
        }
      }

    ];
    return inquirer.prompt(questions);
  },
};

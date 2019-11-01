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

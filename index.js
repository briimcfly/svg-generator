const {readFile, writeFile} = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
    type: 'input',
    message: 'Enter up to 3 characters for the logo text',
    name: 'logo',
    //check to make sure logo is > 0 and < 4
    validate: logo => {
        if (!logo) {
            return 'Logo Text is required'; 
        } else if (logo.length > 3) {
            return 'Logo must be 3 characters or less';
        } else {
            return true;
        }
        }
    }
])
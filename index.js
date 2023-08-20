const {readFile, writeFile} = require('fs');
const inquirer = require('inquirer');
const ColorLib = require('./lib/Colors');
const GenerateLogo = require('./lib/Logo');

GenerateLogo();




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
    },
    {
        type: 'input',
        message: 'Enter a color keyword (blue, green, red, etc.) or a hexadecimal number',
        name: 'color',
        validate: color => {
            //reg expression for correct hex value || 3 or 6 code (#fff & #fffffff = true)
            const isHex = /^#([A-Fa-f0-9]{3}$|[A-Fa-f0-9]{6}$)/.test(color);
            //check the color library for color names
            const isKeyword = ColorLib.includes(color.toLowerCase());
            //error message if user enters incorrect hex or keyword
            if (!isHex && !isKeyword) {
                return 'Color must be a valid hexadecimal code or color name';
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: [
            'Triangle',
            'Circle',
            'Square'
        ]
    }
])
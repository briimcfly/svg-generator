const {readFile,writeFile} = require('fs');
const inquirer = require('inquirer'); 
const ColorLib = require('./lib/Colors.js'); //color library
const GenerateLogo = require('./lib/Logo.js'); //starting logo
const { Triangle, Circle, Square } = require('./lib/Shapes.js'); //shapes

//Generate the Application Logo
GenerateLogo();

//Color Check Functions
function colorCheck(color) {
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

//Types of Shapes
const shapeTypes = {
    'circle': Circle,
    'square': Square,
    'triangle': Triangle
};

//function to Write the SVG 
function createSVG(shape){
    writeFile('examples/logo.svg', shape.render(), (err => {err ? console.log("Error") : console.log("SVG Generated!")}));
}


inquirer
.prompt([
    {
        //Ask user for Logo Text
        type: 'input',
        message: 'Enter up to 3 characters for the logo text',
        name: 'text',
        //check to make sure logo is > 0 and < 4
        validate: text => {
            if (!text) {
                return 'Logo Text is required'; 
            } else if (text.length > 3) {
                return 'Logo must be 3 characters or less';
            } else {
                return true;
            }
            }
    },
    {
        //Ask user for Logo Text Color
        type: 'input',
        message: 'Enter a color keyword (blue, green, red, etc.) or a hexadecimal number for your Logo Text Color',
        name: 'textColor',
        validate: textColor => colorCheck(textColor)
    },
    {
        //Ask user for Shape
        type: 'list',
        message: 'Choose a shape',
        name: 'shape',
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        //Ask user for Shape Color 
        type: 'input',
        message: 'Enter a color keyword (blue, green, red, etc.) or a hexadecimal number for your Logo Shape Color',
        name: 'shapeColor',
        validate: shapeColor => colorCheck(shapeColor)
    },
])
.then((response) => {

//Generate the SVG
const svg = new shapeTypes[response.shape](response.text,response.textColor, response.shapeColor);
createSVG(svg);


})
// Import necessary modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/square.js');
const { Circle } = require('./lib/circle.js');
const { Triangle } = require('./lib/triangle.js');

// Prompt the user for input using Inquirer
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters:', // Prompt for entering characters
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter text color:', // Prompt for entering text color
            name: 'textColor',
        },
        {
            type: 'rawlist',
            message: 'Choose a shape from the list below:', // Prompt for choosing a shape
            choices: [
                { name: 'Square', value: 'Square' },
                { name: 'Circle', value: 'Circle' },
                { name: 'Triangle', value: 'Triangle' },
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter shape color:', // Prompt for entering shape color
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        // Based on the chosen shape, create an instance and render the SVG
        if (response.shape === 'Square') {
            const square = new Square(response.characters, response.shapeColor, response.textColor);
            fs.writeFile('./examples/logo.svg', square.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        } else if (response.shape === 'Circle') {
            const circle = new Circle(response.characters, response.shapeColor, response.textColor);
            fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        } else {
            const triangle = new Triangle(response.characters, response.shapeColor, response.textColor);
            fs.writeFile('./examples/logo.svg', triangle.render(), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        }
    })
    .then(() => {
        return console.log("Generated logo.svg"); // Print a message indicating that the logo has been generated
    });

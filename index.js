const inquirer = require('inquirer');

const shapeGenerator = require('./lib/shapeGenerator');

async function init() {
    console.log('Welcome to SVG Logo Generator!');

    const inputs = await inquirer.prompt([
        { 
            type: 'input', 
            message: 'What do you name your logo?', 
            name: 'text', 
        }, 
        { 
            type: 'list', 
            name: 'shape', 
            message: 'What shape do you want for your logo?', 
            choices: [ 'Square', 'Circle', 'Triangle' ] 
        },
        { 
            type: 'input', 
            message: 'What would you like the color of your text to be?', 
            name: 'textColor' 
        },
        { 
            type: 'input', 
            message: 'What would you like the color of your logo to be?', 
            name: 'shapeColor' 
        },
    ]);

    shapeGenerator(inputs);
}

// Call the init function to start the prompt
init();
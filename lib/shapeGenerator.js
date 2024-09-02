const fs = require('fs');
const { Square, Circle, Triangle } = require('./shapesList');

function shapeGenerator(inputs) {
    let shape;

    switch (inputs.shape) {
        case 'Square':
            shape = new Square(inputs.text, inputs.textColor, inputs.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(inputs.text, inputs.textColor, inputs.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(inputs.text, inputs.textColor, inputs.shapeColor);
            break;
        default:
            console.log('Invalid shape selected');
            return;
    }

    const svgLogoContent = `<svg width="300" height="200">
        ${shape.render()}
    </svg>`;

    // Writes SVG Logo content to a generatedLogo.svg file
    fs.writeFile('generatedLogo.svg', svgLogoContent, (error) => {
        if (error) {
            console.error('An Error has occurred', error);
        } else {
            console.log('Logo generated successfully! ');
        }
    });
}

module.exports = shapeGenerator;
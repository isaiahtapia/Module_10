class Square {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        return `
          <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />
          <text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
      }
}

class Circle {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        return `
          <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          <text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
      }
}

class Triangle {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    render() {
        return `
          <polygon points="150,10 280,190 20,190" fill="${this.shapeColor}" />
          <text x="150" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `;
      }
}

module.exports = { Square, Circle, Triangle }
class Shape {
    constructor(text, textColor, shapeColor){
        this.textColor = textColor
        this.text = text
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape{
    constructor() {
        super(text, textColor, shapeColor)
    }
    render() {
    return `

    `
    }
}

class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>
    `
    }
}

class Square extends Shape{
    constructor() {
        super(text, textColor, shapeColor)
    }
    render() {
    return `
    
    `
    }
}

module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}
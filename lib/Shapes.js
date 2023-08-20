class Shape {
    constructor(text, textColor, shapeColor){
        this.textColor = textColor
        this.text = text
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,100 50,275 250,275" fill="${this.shapeColor}" /><text x="150" y="240" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill ="${this.shapeColor}" /><text x="100" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}
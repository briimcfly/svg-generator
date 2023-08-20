//The base Shape class
class Shape {
    constructor(text, textColor, shapeColor){
        this.textColor = textColor
        this.text = text
        this.shapeColor = shapeColor
    }
}

//The Triangle Shape
class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    //Render a Triangle
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 10,190 290,190" fill="${this.shapeColor}" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
//The Circle Shape
class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    //Render a Circle
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

//The Square Shape
class Square extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    //Render a Square
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200" fill ="${this.shapeColor}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}
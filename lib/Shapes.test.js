const { Triangle, Circle, Square } = require('./Shapes.js'); //shapes

//Test the Shapes
describe('Shape', () => {
    //Test Square
    describe('Render Square',() => {
        it('Should Render a Square', () => {
            //arange
            const square = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill ="#000" /><text x="100" y="110" font-size="60" text-anchor="middle" fill="#FFF">ABC</text></svg>`
            const expectedSquare = new Square('ABC', '#FFF', '#000');

            //act
            const result = expectedSquare.render();

            //assert
            expect(result).toEqual(square);

        })
    })
    //Test Circle
    describe('Render Circle',() => {
        it('Should Render a Circle', () => {
            //arange
            const circle = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="#000" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="#FFF">ABC</text></svg>`
            const expectedCircle = new Circle('ABC', '#FFF', '#000');

            //act
            const result = expectedCircle.render();

            //assert
            expect(result).toEqual(circle);

        })
    })
    //Test Triangle
    describe('Render Triangle',() => {
        it('Should Render a Triangle', () => {
            //arange
            const triange = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 10,290 290,290" fill="#000" /><text x="150" y="210" font-size="60" text-anchor="middle" fill="#FFF">ABC</text></svg>`
            const expectedTriangle = new Triangle('ABC', '#FFF', '#000');

            //act
            const result = expectedTriangle.render();

            //assert
            expect(result).toEqual(triange);

        })
    })
})
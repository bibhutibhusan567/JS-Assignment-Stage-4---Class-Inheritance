// import using require
const Shape = require('./shape');
// declare class
class Circle extends Shape{
    constructor(){
        super();
        // this.color = "black";
    }
    calculateArea (){
        console.log("Area of " + this.color + " circle is:")
        return 3.14 * 2 * 2;
    }
}

// export class using module.exports
module.exports = Circle;
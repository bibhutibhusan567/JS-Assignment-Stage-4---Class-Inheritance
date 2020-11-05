// declare class
class Shape{
    constructor(){
        this.color = "pink";
    }
    drawShape(){
        console.log("I dont have Shape!!!");
    }
    calculateArea(){
        console.log("We need dimensions of the Shape");
        return 0;
    }
}
// export class using module.exports
module.exports = Shape;
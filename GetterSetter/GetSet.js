//////DOUBT

// getter===> special method that makes a property readable
// setter= special method that makes a propertty writeable

// validate and modify a value when readind/writing a property

class Rectangle{
    constructor(width,heigth){
        this.width=width
        this.heigth=heigth
    }
    set width(newWidth){
        if((newWidth)>0){
            this._width=newWidth   //====>private property
        }
        else{
            console.error("Width must be a positive number")
        }
    }
    set heigth(newHeigth){
        if((newHeigth)>0){
            this._heigth=newHeigth   //====>private property
        }
        else{
            console.error("Heigth must be a positive number")
        }
    }
    get width(){
        return this._width
    }
    get heigth(){
        return this._heigth
    }

}
const rectangle=new Rectangle(3,4)    //====>Doesnt make any sense right?
console.log(rectangle.width)
console.log(rectangle.heigth)

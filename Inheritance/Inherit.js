
// inheritance==> allows anew class to inherit properties and methods from an existing class(parent->child)
// helps with code reusability

// A class created with a class inheritance inherits all the methods from another class
// To create a class inheritance, use the extends keyword.

class Animal{                   //====>Parent class
    alive=true
    

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal{
    name="rabbit"
    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal{
    name="fish"
    swim(){
        console.log(`This ${this.name} is swin`)
    }
}
class Hawk extends Animal{
    name="hawk"
    hunt(){
        console.log(`This ${this.name} is hunting`)
    }
}

const rabbit =new Rabbit()
const fish =new Fish()
const hawk =new Hawk()


console.log(rabbit.name)
rabbit.eat()
rabbit.sleep()
console.log("==========")

console.log(fish.name)
fish.eat()
fish.sleep()
console.log("==========")

console.log(hawk.name)
hawk.eat()
hawk.sleep()
console.log("==========")

rabbit.run()
fish.swim()
hawk.hunt()
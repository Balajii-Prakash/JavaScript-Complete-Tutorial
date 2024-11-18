//constructor = special method for defining the properties and methods of an object

// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.


function Car(a,b,c,d){
    this.make=a,
    this.model=b,
    this.year=c,
    this.color=d
    this.drive=function(){
        console.log(`You drive the ${this.model}`)
    }
}








const car1=new Car("ford","Mustang",2024,"red")
const car2=new Car("Toyato","Fortuner",2023,"White")
const car3=new Car("Maruti","Swift",2024,"Brown")


console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)


car1.drive()
car2.drive()
car3.drive()
// class=(ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
//        ex: static keyword, encapsulation,inheritance



/// the below example is based on constructor
// function Product(name,price){
//     this.name=name
//     this.price=price
//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: ${this.price}`)
//     }
//     this.calculateTotal=function(salestax){
//         return this.price + (this.price*salestax)
//     }


// }

// const salestax=0.05

// const product1=new Product("shirt","19.99")
// const product2=new Product("pants","19")
// const product3=new Product("Hoodies","39.99")

// product1.displayProduct()
// product2.displayProduct()
// product3.displayProduct()


// console.log(product1.calculateTotal(salestax))
// console.log(product2.calculateTotal(salestax))
// console.log(product3.calculateTotal(salestax))

/// Now we will create using class

/// Similar to other programming languages
class Products{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    // In class, to define a func there is no need of defining function keyword
    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }
    CalculateTotal(salestax){
        return this.price + (this.price * salestax)
    }
}

const product1= new Products("Shirt",68)
const product2= new Products("pants",58)
const product3= new Products("hoodie",98)
product1.displayProduct()
product2.displayProduct()
product3.displayProduct()


const salestax=0.05
console.log(product1.CalculateTotal(salestax))
console.log(product2.CalculateTotal(salestax))
console.log(product3.CalculateTotal(salestax))
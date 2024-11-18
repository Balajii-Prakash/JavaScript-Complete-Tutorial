// objects===> A collection of related properties(variables) and/or methods(function)
//             can represent real world objects (people,products,palces)
//             object={key:value,
//                     function()}
//An object is a data type that can take in collections of key-value pairs.
//A major difference between an object and other data types such as strings and numbers in JavaScript is that an objects can store different types of data as its values. On the other hand, primitive data types such as numbers and strings can store only numbers and strings, respectively, as their values.

// In object keys are always strings


const person1={
    firstname:"Balaji",
    lastName: "Prakash",
    age:22,
    isEmployed:false,
    sayhello: function (){
        console.log("Hi, I am Balaji Prakash")
    },
    eat:function(){console.log("I am eating a Briyani")}
}

const person2={
    firstname:"Sarath",
    lastName: "Kumar",
    age:22,
    isEmployed:true,
    sayhello:  ()=>{
        console.log("Hey, I am Sarath Kumar")
    },
    eat:()=>{console.log("I am eating Parotta")}

}


// To add an element
person1.gender="Male"


console.log(person1.firstname)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayhello()
person1.eat()
console.log(person1)

console.log(person2.firstname)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)
person2.sayhello()
person2.eat()
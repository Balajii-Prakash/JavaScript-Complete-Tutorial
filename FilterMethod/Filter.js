// .filter()==> creates a new array by filtering out elements by the specified condition

// Here in filter wee will be using specified condition to filter out our array using func callback


/// EXAMPLE 1
// let numbers=[1,2,3,4,5,6,7]
// let evenNums=numbers.filter(isEven)
// let oddNums=numbers.filter(isOdd)
// console.log(evenNums)
// console.log(oddNums)

// function isEven(element){
//     return element%2===0
// }

// function isOdd(element){
//     return element%2!==0
// }

// EXAMPLE 2
// const ages=[16,17,18,19,20,60]
// const adults=ages.filter(isAdult)
// const child=ages.filter(isChild)
// console.log(adults)
// console.log(child)

// function isAdult(element){
//     return element>=18
// }

// function isChild(element){
//     return element<18
// }


// EXAMPLE 3
const words=['apple','orange','banana','kiwi','pomegrante','coconut']
const shortWords=words.filter(getShortWords)
const longWords=words.filter(getLongWords)
console.log(shortWords)
console.log(longWords)


function getShortWords(element){
    return element.length<=6

}

function getLongWords(element){
    return element.length>6

}
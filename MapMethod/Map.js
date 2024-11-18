// .map()== accepts a callback and applies that func to each element of an array . then return a new array
// SYNTAX:
//         var=array.map(callback Func name)   


// EXAMPLE 1
// const numbers=[1,2,3,4,5]
// const squares=numbers.map(square)   ////=> it will return an array afteer the function is executed
// console.log(squares)

// const cubes=numbers.map(cube)
// console.log(cubes)



// function square(element){
//     return Math.pow(element,2)
// }
// function cube(numbers){
//     return Math.pow(numbers,3)
// }

/// EXAMAPLE 2

// const students=['Balaji','Hrishi','Ganesh','Dhilli','Naveen']
// const studentsUpper=students.map(upperCase)
// const studentsLower=students.map(lowerCase)

// console.log(studentsUpper)
// console.log(studentsLower)


// function upperCase(element){
//     return element.toUpperCase()
// }

// function lowerCase(element){
//     return element.toLowerCase()
// }


// EXAMPLE 3
const dates=["2024-04-08","2024-08-05","2026-09-30"]
const formattedDates=dates.map(formatdates)
console.log(formattedDates)
function formatdates(element){
    const parts=element.split("-")
    console.log(parts)
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}
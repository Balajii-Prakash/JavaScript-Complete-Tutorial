// callback== it is a function that is passed as an arg to another function.



//             used to handle asynchronous operations
//             1. readind a file
//             2. Network operations
//             3. Interacting with databases

//             "hey, your are done, call this next."

// EX 1
// function hello(callback){
//     console.log('hello')
//     callback()
// }



// // callback function
// function wait(){
//     console.log("wait")

// }
// function leave(){
//     console.log("leave")
// }
// function goodbye(){
//     console.log("good bye")
// }
// hello(wait)



// // EX 2

function sum(callback,x,y){
    let result=x+y
    callback(result)
}
function displayConsole(result){
    console.log(result)
}



// callback func
function displayPage(result){       
    document.getElementById("myH1").textContent=result
}
sum(displayPage,1,2)

// The visible output statemnt must be present in the callback function
// callback hell=====> Situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read .old patterns to handle asynchromous functions.Use promises + async/await to avoid callback hell
// The main purpose using this call back hell is make our asynchronous code behave like a synchronous code by nesting all the callback function.

function task1(callback){      ///// =====> asynchronous function   
    setTimeout(()=>{
        console.log("Task 1 complete")
        callback()
    },2000)
    
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 complete")
        callback()
    },1000)
    
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 complete")
        callback()
    },3000)

    
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 complete")
        callback()
    },1500)
    
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{                                          /////CallBack Hell===> Here the callback functions are nested
                console.log("All tasks are completed")
            })
        })
    })
})
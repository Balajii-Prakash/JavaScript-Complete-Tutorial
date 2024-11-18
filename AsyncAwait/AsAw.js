// Async/Await===> Async: MAkes a function return a Promise
//                 Await: Makes the async function wait for the promise

 //                   Allows you to write asynchronous code in synchronous manner Async doesnt have resolve or reject parameters everything after await is placed in an event queue

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked=true
            if(dogWalked){
                resolve("You walk the dog")
            }
            else{
                reject("You didnt walk the dog")
            }
        },1500)
    
        })
}


function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned=true
            if(kitchenCleaned){
                resolve("You clean the kitchen")
            }
            else{
                reject("You didnt clean the kitchen")
            }
        },6000)
    
        })
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTaken=true
            if(trashTaken){
                resolve("You take the trash")
            }
            else{
                reject("You didnt take the trash")
            }
        },1000)
    
        })
}

async function doChores(){
    const walkDogResult=await walkDog()
    console.log(walkDogResult)

    const cleanKitchenResult=await cleanKitchen()
    console.log(cleanKitchenResult)

    const takeOutTrashResult=await takeOutTrash()
    console.log(takeOutTrashResult)

}
doChores()
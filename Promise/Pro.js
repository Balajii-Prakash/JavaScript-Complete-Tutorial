// Promise===> An object that manages asynchronous operations
//             wrap a promise object around{asynchronous code}
//             "I promise to return a value"
//             PENDING--->  RESLOVED OR REJECTED
//      syntax==>       new Promise((resolve,reject)=>{asynchronous opeartions})

// DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed

// function walkDog(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("You walk the dog")
//         },1500)

//     })
// }

// function cleanKitchen(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("You clean the kitchen") 
//         },2500)
//     })

// }function takeOutTrash(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("You take out the trash")
//         },500)   
//     })
// }




// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>console.log("You  finished all the task"))
//     })
// })


// walkDog().then(value=>{console.log(value); return cleanKitchen()})
//          .then(value=>{console.log(value); return takeOutTrash()})
//          .then(value=>{console.log(value)})



// ===========================================================================


//Async==> can perform long network req without blocking the main thread
//Sync==>Synchronous req can process one at atime, other request wait until the first one completes
//Promises use for asynchronous operations



// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Success")
//         console.log("solved")
//     },1000)
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Success")
//     },1000)
// })
// p1.then(console.log)

//==========================================================

//const cart=["Shoes","pants","kurta"];

// createOrder(cart,function(orderId){
//     proceedTOPayment(orderId); 

// });   
//createOrder(cart);   //orderId ......takes the cart items and return their order id
//proceedTOPayment(orderId);  //will takes the orderId and proceed to payment page
///the above two APIs are Asynchronous


// const promise=createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// });
// const GITHUB_API="https://api.github.com/users/akshaymarch7"
// const user=fetch(GITHUB_API)
// console.log(user)


// user.then(function(data){
//     console.log(data)
// })


//Promise=>>> A container for future values

//(or)

//Promise is an object representing the eventual completion or failure of an asynchronous operation 


//Promise chaining

//Example

createOrder(cart)
.then((orderId)=> proceedToPayment(orderId))
.then((paymentInfo)=>showOrderSummary(paymentInfo))
.then((paymentInfo)=>updateWalletBalance(paymentInfo));
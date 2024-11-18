//eventListener=listen for specific events to create interactive web pages
//                events: keydown,keyup
//                syntax====>.addEventListner(event,callback/anannymous function/arrow function)  \
const myBox=document.getElementById("myBox")
const moveAmount=100
let x=0
let y=0
document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount
                break
            case "ArrowDown":
                y+=moveAmount
                break
            case "ArrowLeft":
                x-=moveAmount
                break
            case "ArrowRight":
                x+=moveAmount
            
        }
        myBox.style.top=`${y}px`
        myBox.style.left=`${x}px`
    }
})
// document.addEventListener("keydown",(event)=>{
//     console.log(`key down=${event.key}`)
// })
// document.addEventListener("keydown",(event)=>{
//     console.log(`key up=${event.key}`)
// })

document.addEventListener("keydown",(event)=>{
    myBox.textContent="🥲"
    myBox.style.backgroundColor="tomato"
    
})
document.addEventListener("keyup",(event)=>{
    myBox.textContent="😃"
    myBox.style.backgroundColor="lightblue"
    
})



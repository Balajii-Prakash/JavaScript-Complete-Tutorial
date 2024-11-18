// classList===> Element property in Js used to interact with an elements list of classes(css classes) .Allows you to make reusable classes for many elements across your webpage


// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldclass,newClass)
// contains()

// To Add a class
// const myButton=document.getElementById("myButton")
// myButton.classList.add("enabled")
// // To remove the class
// myButton.classList.remove("enabled")


// const myButton=document.getElementById("myButton")

// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover")
// })
// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover")
// })
//myButton.classList.add("hover")


// replace method ===> used to replace one class with another

// myButton.classList.add("enabled")
// myButton.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😃"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }

// })

// // contains method===> if it contains it will return true of it will return false




// const myH1=document.getElementById("myH1")
// myH1.classList.add("enabled")

// myH1.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😃"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }

// })



/////========> NOdelist

let buttons=document.querySelectorAll(".myButtons")

buttons.forEach(button=>{
    button.classList.add("enabled")
})
buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover")
    })
})
buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover")
    })
})

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent+="😃"
        }
        else{
            event.target.classList.replace("enabled","disabled")
        }
        
    })
})

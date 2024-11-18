const myButton=document.getElementById("myButton")
const myImg=document.getElementById("myImg")


myButton.addEventListener("click" ,event=>{


    if(myImg.style.display=="none"){
        myImg.style.display="block"
        myButton.textContent="Hide"
    }
    else{
        myImg.style.display="none";
        myButton.textContent="Show"
    }

    
 })
// EXAMPLE <LI>


//STEP 1: CREATE A ELEMNT

const newListItems=document.createElement("li")

// STEP 2: ADD ATTRIBUTES 

newListItems.textContent="coconut"
newListItems.id="coconut"
newListItems.style.fontWeight='bold'
newListItems.style.backgroundColor='lightgreen'

// STEP 3: APPENED ELEMNT TO DOM

//document.body.append(newListItems)
//document.getElementById("fruits").append(newListItems)
//document.getElementById("fruits").prepend(newListItems)
// const orange=document.getElementById("orange")
// document.getElementById("fruits").insertBefore(newListItems,orange)

//Q) What if we dont have the id ====>we use querySElectorAll

// const listItems=document.querySelectorAll("#fruits li")
// document.getElementById("fruits").insertBefore(newListItems,listItems[0])


//REMOCVE

document.getElementById("fruits").removeChild("coconut")
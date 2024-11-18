// IF STATEMENT ===> if a condition is true ,execute some code if not do something else.


// here is the simple project to demonstrate if else and else if
const myText=document.getElementById("myText")
const mySubmit=document.getElementById("mySubmit")
const resultElemnt=document.getElementById("resultElemnt")
let age
mySubmit.onclick=function(){
    age=myText.value
    age=Number(age)
    if(age>=100){
        resultElemnt.textContent=`You are too old to Enter the site`
    }
    else if(age==0){
        resultElemnt.textContent=`You are just born`
    }
    else if(age>=18){
        resultElemnt.textContent=`You are old enough to enter the site `
    }
    else if(age<0){
        resultElemnt.textContent=`You are age cannot below o `
    }
    else{
        resultElemnt.textContent=`You must be 18+ to enter the site `
    }


}
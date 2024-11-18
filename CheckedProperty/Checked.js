// . checked=property  that determines the checked state of an html chechbox or radio button


const myCheckBOx=document.getElementById("myCheckBOx")
const visaBtn=document.getElementById("visaBtn")
const masterCardBtn=document.getElementById("masterCardBtn")
const payPalBtn=document.getElementById("payPalBtn")
const mySubmit=document.getElementById("mySubmit")
const subResult=document.getElementById("subResult")
const paymentResult=document.getElementById("paymentResult")


mySubmit.onclick=function(){
    if(myCheckBOx.checked){
        subResult.textContent=`You are subscribed`
    }
    else{
        subResult.textContent=`You are  not subscribed`
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with Visa`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with Master Card`
    }
    else if(payPalBtn.checked){
        paymentResult.textContent=`You are paying with Pay pal Card`
    }
    else{
        paymentResult.textContent=`You must selsct a payment type`
    }
}
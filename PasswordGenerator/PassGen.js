function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars='abcdefghijklmnopqrstuvwxyz'
    const uppercaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersChars='1234567890'
    const symbolChars='!@#$%^&*())_+='

    let allowedChars=""
    let password=""

    allowedChars+=includeLowercase?lowercaseChars:""
    allowedChars+=includeUppercase?uppercaseChars:""
    allowedChars+=includeNumbers?numbersChars:""
    allowedChars+=includeSymbols?symbolChars:""


    if(length<=0){
        return 'password length must be atleast 1'
    }
    if(allowedChars.length==0){
        return 'Atleast 1 set of characters needs to be selected'
    }
    for(let i=0;i<=length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password+=allowedChars[randomIndex]
    }
    return password

}



const passwordLength=12 
const includeLowercase=true
const includeUppercase=true
const includeNumbers=true
const includeSymbols=true
const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols)
console.log(`Genrated password: ${password}`)
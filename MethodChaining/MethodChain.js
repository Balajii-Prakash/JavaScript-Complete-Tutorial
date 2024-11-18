//Method chaning===> Calling one method after another in one contimuous line of code

// No method chaining

let userName=window.prompt("Enter")
// userName=userName.trim()
// let letter=userName.charAt(0)
// letter=letter.toUpperCase()
// let extra=userName.slice(1)
// extra=extra.toLowerCase()
// userName=letter+extra
// console.log(userName)

/// Method Chaining


userName=userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
console.log(userName)
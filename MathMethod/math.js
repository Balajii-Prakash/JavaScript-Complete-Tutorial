//Math===> built in object that provides a collection of properties amd methods


console.log(Math.PI)
console.log(Math.E)

// round
let x=3.7
console.log(Math.round(x))

// floor==> always round down


let y=3.99
console.log(Math.floor(y))

//ceil===> always rounds up

let z=3.12
console.log(Math.ceil(z))

//trunc==> cuts down the decimal value

let a=3.9
console.log(Math.trunc(a))

//pow ==> normal power of

let b=2
let c=3
console.log(Math.pow(b,c))

//sqrt==> finds the square root of a number

let d=36
console.log(Math.sqrt(d))

// log==>finds the log of a value

let e=10
console.log(Math.log(e))


//absolute==> which gives the actual number but it will be positive

let f=-3.777
console.log(Math.abs(f))

// Max and Min

g=7
h=5
i=10
console.log(Math.max(g,h,i))
console.log(Math.min(g,h,i))

j=[2,5,4,8,3]
console.log(Math.max(j)) //=====>>> it will throw u a error coz math is applicable to only number datatypes
// JSON=(Java Script object notation)data interchange format
//       Used for exchanging data between a server and web application
//       Json files {key:values} OR [value1, value2, value 3]

// JSON.stringyfy()=convert a JS object to a JSON STRING
// JSON.PARSE()= CONVERTS A JSON STRING TO A JS OBJECT

const jsonNames=`["balaji","Hrishi","Ganesh","Dhilli","Sarath"]`
const jsonPerson=`{
    "name":"Balaji",
    "age":22,
    "employed":true,
    "hobbbies":["Cricket","cooking","learning"]
}`
const jsonPeople=
`[
    {
        "name":"Balaji",
        "age":22,
        "employed":false
    },
    {
        "name":"Vinod",
        "age":54,
        "employed":true
    },
    {
        "name":"Sarath",
        "age":22,
        "employed":true
    },
    {
        "name":"Hrishi",
        "age":22,
        "employed":true
        
    }
]`

// const jsonString=JSON.stringify(names)
// console.log(jsonString)

// const jsonString=JSON.stringify(person)
// console.log(jsonString)

// const jsonString=JSON.stringify(people)
// console.log(jsonString)


//=============================

// const parseData=JSON.parse(jsonNames)
// const parseData1=JSON.parse(jsonPerson)
// const parseData2=JSON.parse(jsonPeople)
// console.log(parseData)
// console.log(parseData1)
// console.log(parseData2)

///====================
// How to fetch a data==> we use fetch method


// fetch("person.json")
//     .then(response=>response.json())
//     .then(value=>{
//         console.log(value)}
//     )

// fetch("names.json")
//     .then(response=>response.json())
//     .then(value=>{
//         console.log(value)}
//     )
fetch("people.json")
    .then(response=>response.json())
    .then((values)=>values.forEach(value=>{
        console.log(value.name)}
    )
    )
    
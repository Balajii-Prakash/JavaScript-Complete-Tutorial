//ES6 MOdule= An external file that contains reusable code that can be imported into other javascript FileSystem.Write resuaable code for many differnet apps. Can contain variables, classes, function... and more Introduc ed as part of ECMAScript 2015 update

// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain the code-base.

// ES Modules rely on the import and export statements.

/// SYNTAX: import {specify the things you need to import } from location(file location)
import {PI,getCircum,getArea,getVolume} from './mathUtil.js'

console.log(PI)
const circum= getCircum(10)
console.log(`${circum.toFixed(2)}`)
const area=getArea(5)
console.log(area.toFixed(2))
const volume=getVolume(40)
console.log(volume.toFixed(2))
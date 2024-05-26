//Strings

let a = "Mahindra"
console.log(a.length)
// console.log(a.charAt(4))
// console.log(a.slice(0,7))
// console.log(a.charCodeAt(1))
// console.log(a.indexOf('a'))
// console.log(a.endsWith('ra'))
// console.log(a.startsWith('M'))
// console.log(a.replace('a','r'))
// console.log(a.trim)
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// console.log(a[6])
// console.log(a[7])

let n = "Raj"
let c = "       Scorpio       "

console.log("His name is " + n + " and his car's name is " + c) //instead of writing like this
console.log(`His Name is ${n} and his car's name is ${c}`)//write this,it is much easier. Known as TEMPLATE LITERAL

//ESCAPE SEQUENCE \n--> new line , \t--> tab(Generates Space) , \r--> Carraige return(only prints the substring which is in front of \r)
let strr = "vin\r\nffdiseal"
console.log(strr)

console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.trim())
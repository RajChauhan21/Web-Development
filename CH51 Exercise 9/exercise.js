/* Create a faulty calculator using JavaScript

This faulty calculator does the following:
1.It takes two Number as Input from the user
2.It performs wring operations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times
*/

let random = Math.random()
// console.log(a)
// let a = 2
// let b = 7


//It is Addition func which perfoms Subtraction when the random number goes less than 10%
const add=(a,b)=>{
    if(random<0.1){
        return a-b
    }
    else{
        return a+b
    }
}

const multi=(a,b)=>{
    if(random<0.1){
        return a+b
    }
    else{
        return a*b
    }
}

const sub=(a,b)=>{
    if(random<0.1){
        return a/b 
    }
    else{
        return a-b
    }
}

const divi=(a,b)=>{
    if(random<0.1){
        return a**b
    }
    else{
        return a/b
    }
}
console.log(add(3,6))
console.log(multi(2,6))
console.log(sub(7,2))
console.log(divi(8,7))
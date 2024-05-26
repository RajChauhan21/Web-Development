//Functions

function _name(naam) {
    console.log("Hello " + naam+ " sir")
    console.log("Hello " + naam+" I love your Car")
}

function sum(a,b,c=1){ //c is a default parameter and 1 is a default value 
    return a+b+c;
    // console.log(a+b)
    // console.log(a/b)
    // console.log(a*b)
    // console.log(a-b)
}

let result = sum(1,3,5); //we can manually pass argument of 'c'
console.log(result)

_name("Raj");
_name("Raghav");
_name("Ramit")
// sum(12,9)

//ARROW FUNCTION
const dunction = (r)=>{
    console.log("ARROW FUNCTION " + r)
}
const fun=(x,y)=>{
    return x+y;
}
const func=(e,t)=>{
    return e*t
}
console.log(fun(2,4))
console.log(func(2,4))
dunction(21)
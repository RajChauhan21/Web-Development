console.log("Hello EveryBody")
var a = 20; //'var' is globally scoped and 'let' is globally scoped 
var b = 30;
var nam = "Welcome! Raj Chauhan"
var fl = 21.00;
var ch = 'r';

//const variable 
// const x = 40;
// x = x + 21; //not allowed , constants can't be changed

//prints on console
{
    var a = 21;
    console.log(a);
}
// console.log(a);
// console.log(a+b);
// console.log(nam);

//shows the type of variable
console.log(typeof a , typeof b , typeof nam , typeof fl , typeof ch);

//Primitive Data types
let r = 21; //number
let m = "Raj"; //string
let j = true; //boolean
let c = undefined //undefined
let h = null;
let n = 30000000.0000000000;

console.log(r,m,j,c,h,n);
console.log(typeof r,typeof m,typeof j,typeof c,typeof h,typeof n);

//Objects in JavaScript

let ob = {
    //key        //value
    name: "Raj", isHandsome:true, salary:40000000000000000000000000000000000000000000000000000000000000000000
}

let auto = {
    car:"XUV 3Xo" , Owner:"Raj Chauhan"
}

console.log(ob , auto);

ob.name = "RAM";
auto.car = "SCORPION"
console.log(ob , auto);

//Quick Quiz
//write a javascript program to store name , phone number and marks of a student using object

let s1 = {
    Name:"Raj" , Phonenumber: 92185794734 , marks:"100/100"
}
let s2 = {
    Name:"Ram" , Phonenumber: 92146959364 , marks:"80/100"
}
let s3 = {
    Name:"Ramit" , Phonenumber: 92563584484 , marks:"60/100"
}
let s4 = {
    Name:"Raman" , Phonenumber: 957495784528 , marks:"70/100"
}
let s5 = {
    Name:"Raghav" , Phonenumber: 975763029482 , marks:"80/100"
}

console.log(s1,s2,s3,s4,s5);
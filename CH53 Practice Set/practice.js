//PRACTICE SET ON STRINGS

//QUES 1--> WHAT WILL BE THE FOLLOWING OUTPUT???
console.log("raj\"".length)

//QUES 2-->EXPLORES THE INCLUDES , STARTSWITH , ENDSWITH FUNCTIONS OF A STRINGS
let str = "Mahindra"

console.log(str.includes("din"))
console.log(str.startsWith("Mah"))
console.log(str.endsWith("dra"))

//QUES 3--> WRITE A PROGRAM TO CONVERT A STRING INTO LOWERCASE

const lc =(name)=>{
    return name.toLowerCase();
}
console.log(lc("LAPTOP"))

//QUES 4--> EXTRACT THE AMOUNT OF THE STRING
//"please give rs 1000"
let sr = "please give rs 1000"
console.log(sr.slice(15,20))

//QUES 5--> TRY TO CHANGE 4TH CHAR OF THE STRING IN QUES 4
console.log(sr.replaceAll('s','r'))
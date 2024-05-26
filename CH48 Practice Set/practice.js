//QUES 1 --> USE LOGICAL OPERATOR TO FIND WHETHER THE AGE OF PERSON LIES BETWEEN 10 - 20 OR NOT
let age = 20;

if(age >= 10 && age <=20){
    console.log(true)
}
else{
    console.log(false)
}

//QUES 2 --> DEMONSTRATE THE USE OF SWITCH CASE STATEMENT IN JAVASCRIPT
let day = 7
let dayName;
switch(day){
    case 1:dayName="Monday";
    break;

    case 2:dayName="Tuesday";
    break;

    case 3:dayName="Wednesday";
    break;

    case 4:dayName="Thursday";
    break;

    case 5:dayName="Friday";
    break;

    case 6:dayName="Saturday";
    break;

    case 7:dayName="Sunday";
    break;

    default:"Invalid day";
}
console.log(dayName)


//QUES 3 --> WRITE A JS PROGRAM TO FIND WHETEHER A NUMBER IS DIVISIBLE BY 2 AND 3
let div = 0;

if(div%2==0 && div%3==0){
    console.log("Number is divisible")
}
else{
    console.log("Not divisible")
}

//QUES 4 --> WRITE A JS PROGRAM TO FIND WHETEHER A NUMBER IS DIVISIBLE BY EITHER 2 OR 3
let num = 49;

if(num%2==0 || num%3==0){
    console.log("Number is divisible")
}
else{
    console.log("Not divisible")
}

//QUES 5 --> PRINT "YOU CAN DRIVE" OR "YOU CANNOT DRIVE" BASED ON AGE BEING GREATER THAN 18 USING TERNARY OPERATOR
let a = 21;
console.log(a>=18?"You can drive":"you cannot drive")
//QUES 1 --> WRITE A PROGRAM TO PRINT THE MARKS OF THE STUDENT IN AN OBJECT USING FOR LOOP
const obj = {
    raj: 90, ram: 89, ramit: 93, raman: 86, raghav: 91
}
for (let i = 0; i < 6; i++) {
    const elem = obj[i];
    console.log(elem)
} //CAN'T PRINT THE MARKS IN THE OBJECT USING FOR LOOP

//QUES 2 --> SAME AS QUES 1 BUT INSTEAD FOR LOOP USE FOR-IN LOOP
for (const key in obj) {
    const element = obj[key];
    console.log(element)
}

//QUES 3 --> WRITE A PROGRAM TO PRINT "TRY AGAIN" UNTILL THE USER ENTERS CORRECT NUMBER
let bool = false;
let num = 73;
while(bool==false){
    if(num > 0 && num < 101){
        console.log("Correct Number")
        bool = true;
    }
    else{
        console.log("TRY AGAIN")
        break;
    }
}

//QUES 4 --> WRITE A FUNCTION TO FIND THE MEAN OF FIVE NUMBERS
const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

console.log(mean(2,5,3,4,8))

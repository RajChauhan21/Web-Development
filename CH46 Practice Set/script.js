//Practice questions on Variables and Data types

// QUES 1 --> CREATE A VARIABLE OF TYPE STRING AND TRY TO ADD NUMBER IN IT

let a = "raj" + 21 //so it cancatenates the string and adds the number
console.log(a);

//QUES 2 --> USE 'typeof' operator and find the data type of previous question(string)

console.log(typeof a); // It shows String

//QUES 3 --> CREATE A CONST OBJECT IN JS , CAN YOU CHANGE IT TO HOLD A NUMBER LATER??

const cr = {
    Name: "Raj" , Num:21
} 
cr.Num = 63;
console.log(cr); //The Number has been Changed in 'CONST' Object

//QUES 4 --> TRY TO ADD A NEW KEY TO THE CONST OBJECT IN QUES 3 WILL YOU ABLE TO DO IT??
//ANS --> WE CAN'T ADD 2ND KEY IN THE SAME OBJECT

//QUES 5 --> WAP TO CREATE DICTIONARY OF WORD-MEANING OF 5 WORDS

let word1 = {
    word:"Car" , mean:"A vehicle"
}
let word2 = {
    word:"Cake" , mean:"A Baked Soft bread , Loaded with chocolate and creams"
}
let word3 = {
    word:"Smartphone" , mean:"An Electronic device mainly used for calling , gaming and many more....."
}
let word4 = {
    word:"Bottle" , mean:"A Physical or real world object that is used to carry water or any liquid Material"
}
let word5 = {
    word:"Girl/Women" , mean:"A logic that not even Albert Einstein could UnderStand"
}

console.log(word1,word2,word3,word4,word5);
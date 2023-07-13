


//-------------------Objects-----------
//------Object old and es6
/*let getingfunc = {
    name : "Abrar",
    email : "abrarulhassan970@gmail.com"
}*/
//--old method
/*
let unmae = getingfunc.name;
console.log(uname)*/


//Es6
//Destructing of object
/*
let {email,name} = getingfunc;
console.log(email)*/
//---------------End Object----------------



//-----------------Array -------------------
//array aold and es6
/*
let names = ["abrar","hassan","Ali"]*/

//old method each values
/*
let name1 = names[0];
let name2 = names[1];
let name3 = names[2];
console.log(name1)
*/
//------Es6 for array Destructing

/*let [nam1,nam2,nam3] = names;
console.log(nam1);*/
//----------------End Array--------------------


//---------------Function Expression----------------------
//----------old Function--------
/*function food(){
    console.log("Hello World")
}
*/
//---------------and Es6 ------

/*let food = function(){
    console.log("Hello world")
}
food()*/
//---------------Function Expression End----------------------





//-------------Arrow Function -----------

// Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

//----Normal Function----
/*function food(){

}
food()
*/

//----Arrow Function
/*let food = ()=>{

}
food()
*/

//----Normal Function WIth 1 variable 
/*function food(user){
    console.log("My name is"+user)
}
food("Abrar")*/

//----fOR arrow function with 1 variable
//--------1 Mthod---
/*let food = (user)=>{
    console.log(`my name is ${user}`)
}
food("Abrar")*/


//--------2 Mthod---
/*
let food = user=>{
    console.log(`my name is ${user}`)
}
food("Abrar")*/

//-------This in function of es5 call about function
//---------this in function of es6 call about parent



//-------Call back Function -------
// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// //--------Another Example----------
// //  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');




//------Array Function-----
/*let array = [{uname:"abrar",age:20},{uname:"asad",age:30}]
let filterfunc = array.filter((e)=>{
    return e.age == 20

})
console.log(filterfunc)*/


//----Best for searching technique-----
/*let uname = "abrar";
let search = "";

if(uname.startsWith(search)){
    console.log(uname)
}*/


//-----Array Map-----
/*let array = [{num1:1},{num2:2}];
let multiplyarray = array.map((e)=>e = 2);
console.log(multiplyarray)*/

//---Promises--------

//-----Snycrhrnous and Asyni
// creating objects via constructor

// var Person = function(name,yearOfBirth,job){
//     this.fullName=name;
//     this.birthYear=yearOfBirth;
//     this.profession=job;
//     this.calculateAge=function(){
//         console.log(2020-this.birthYear);
//     }
// }

// var john = new Person("John",1998,"Engineer");//instanciation process

// john.calculateAge();

// var hari = new Person("Hari",1998,"Software Developer");

// hari.calculateAge();

// *****************PROTOTYPES************************

// var Person = function(name,yearOfBirth,job){
//     this.fullName=name;
//     this.birthYear=yearOfBirth;
//     this.profession=job;
    
// }

// Person.prototype.calculateAge = function(){
//         console.log(2020-this.birthYear);
//     }//inheritance in practice

// Person.prototype.lastName = "Human";

// var john = new Person("John",1998,"Engineer");//instanciation process

// john.calculateAge();

// var hari = new Person("Hari",1998,"Software Developer");

// hari.calculateAge();

// john.lastName;

//object create method(A DIFFERENT WAY OTHER THAN CONSTRUCTOR)

// var personProto = {
//     calculateAge: function(){
//         console.log(2020-this.yearOfBirth);
//     }
// };//first we create a prototype as a simple object

// var john = Object.create(personProto);

// john.name="John";
// john.yearOfBirth=1998;
// john.job="Engineer";//old ways but not ideal

// var jane = Object.create(personProto,{
//     name:{value:"Jane"},
//     yearOfBirth:{value:1985},
//     job:{value:"Software Developer"}
// });


// ***************************************

// PRIMITIVES vs OBJECTS

//Objects
// var a,b;
// a=23;
// b=a;
// a=46;//mutated value of a
// console.log(a);
// console.log(b);//primitives(variables hold data in it so changes aren't reflected)

// var objectA={
//     name: "John",
//     age:22
// };

// var objectB={
//     name:"Jane",
//     age:23
// };

// objectB=objectA;
// objectA.age=33;

// console.log(objectA.age);
// console.log(objectB.age);//objects contain a reference to data in memory so changes are reflected as its the same exact object


// //FUNCTIONS

// var age=27;
// var objectC={
//     name:"Jonas",
//     city:"Berlin"
// };

// function change(a,b){
//     a= 39;
//     b.city="Bangalore";
// }

// change(age,objectC);

// console.log(age);//same as for objects
// //primitives remain unchanged so a simple copy is created but in the case of objects a reference to that object is passed into functions.
// console.log(objectC.city);

// ************************************************

// FIRST CLASS FUNCTIONS(call back functions)

// var years =[1960,1967,1990,1890,2000,1998,2014];

// //we could create a function which performs all calc and stores result in an array instead we will create a function which gets another calc as arguments

// function arrayCalculation(array,fntion){
//     var resultArray=[];
//     for(var i=0;i<array.length;i++){
//         resultArray.push(fntion(array[i]));
//     }
//     return resultArray;
// }

// function calculateAge(el){
//     return 2020-el;
// }

// var ages=arrayCalculation(years,calculateAge); 

// console.log(ages);

// function mature(element){
//     return element>=18;
// }
// var maturity=arrayCalculation(ages,mature);

// console.log(maturity);

// function maxHeartRate(element){
//     if(element>=18 && element<=81){
//     return Math.round(206.9-(0.67*element));
//     }
//     else{
//         return -1;
//     }
// }

// var heartHealth=arrayCalculation(ages,maxHeartRate);
// console.log(heartHealth);

// *****************************************************
// FIRST CLASS FUNCTIONS : FUNCTIONS RETURNING FUNCTIONS

// interview questions example

// function interviewQuestion(job){
//     if(job==="designer"){
//         return function(name){
//             //anonymous function as it doesn't have any name
//             console.log(name+", explain Ux Design?");
//         }
//     }
//         else if (job==="teacher"){
//             return function(name){
//                 console.log(name+", what subject do u teach?");
//         }
//     }
//     return function(name){
//         console.log("Hi, what do u do?");
//     }
// }

// var teacherQuestion= interviewQuestion("teacher");

// teacherQuestion("John");

// var designerQuestion=interviewQuestion("designer");
// designerQuestion("Jane");
// designerQuestion("Harry");
// designerQuestion("Spooky");

// interviewQuestion("teacher")("Mark");//works even though looks a bit starnge as it's evaluated from left to right

// *********************************************

// IIFE : Immediateley Invoked Function Expressions

// varibles declared within functions can't be accessed outside the function but its not good practice so we use IIFE

//syntax is (anonymous function)();//function expression followed by immediate expression

// (function (){
//     var score=Math.random()*10;
//     console.log(score>=5);
// }) ();

// function(){

// }//this is treated as a function declaration but since we dont have a name for it, then it would throw an error so inorder to trick javascript parser into believing its an expression which we do by wrapping it in paranthesis-() as whats inside a paranthesis is not a statement. Next we simply need to call it otherwise nothing would happen

//console.log(score);//data privacy achieved as console shows [VM681 cool_stuff.js:207 Uncaught ReferenceError: score is not defined]

// adding arguments to IIFE

// (function(goodLuck){
//     var scoreWithLuck=Math.random()*10;
//     console.log(scoreWithLuck>=5-goodLuck);
// }) (5);

// //so the goal of IIFE is not to produce reusable code as we can call it only once since its not assigned to any variable, all we need is a place to hide variables from outside to obtain data privacy, also dont interfere with other execution contexts

// CLOSURES

// function retire(retireAge){
//     var a=" Years left until retirement"
//     return function(yearOfBirth){
//         var age=2020-yearOfBirth;
//         console.log(retireAge-age+a);
//     }
// }

// var retirementUsa = retire(66);
// retirementUsa(1998);//same as retire(66)(1990);
// //here we used retireAge and variable a which is outside scope of anonymous function but still it worked even after retire function which declared thes are out of the execution context, stopped its execution becoz of closures

// var retirementGermany=retire(65);

// var retirementIndia=retire(60);

// var retirementIceland=retire(67);

// retirementGermany(1998);
// retirementIndia(1998);
// retirementIceland(1998);

// //interview example with closures

// function interviewClosure(interviewJob){
//     var bye="Good Day!";
//     if(interviewJob==="designer"){
//         return function(interviewee){
//             console.log("Explain UX design, "+interviewee+"?");
//             console.log(bye);
//         }
//     }
//     else if(interviewJob==="teacher"){
//         return function(interviewee){
//             console.log("Whats your subject, "+interviewee+"?");
//             console.log(bye);
//         }
//     }
//     else{
//         return function(interviewee){
//             console.log("Who are u?");
//             console.log(bye);
//         }
//     }
// }

// var designerInterview=interviewClosure("designer");
// designerInterview("Yuzuki");


// *********************************************

// BIND,CALL & APPLY

// var rahul={
//     name: "Rahul",
//     age:22,
//     job:"teacher",
//     presentation:function(style,timeOfDay){
//         if(style==="formal"){
//             console.log("Good "+timeOfDay+" ladies and gentlemen!. I\'m "+this.name+",a "+this.age+" year old "+this.job);
//         }
//         else{
//              console.log("Hey whatsapp. I\'m "+this.name+",a "+this.age+" year old "+this.job+". Have a nice "+timeOfDay);
//         }
//     }
// };

// rahul.presentation("formal","morning");


// var emily={
//     name:"Emily",
//     age:27,
//     job:"designer"
// };

// //#call method

// //since emily object doesn't have presentation method we can use call method

// rahul.presentation.call(emily,"casual","evening");//first argument of call method is "this" variable, called method borrowing as it borrows presentation method of rahul, call method allows us to set "this" variable


// //#apply method

// //The only difference between call method and apply method is that apply method accepts arguments as array

// rahul.presentation.apply(emily,["friendly","afternoon"]);

// //#bind method
// //also allows us to set this variable and it doesnt immediateley call function but instead a copy of function so we can store it somewhere useful to sreate function with preset arguments.

// var rahulFriendly=rahul.presentation.bind(rahul,"friendly");

// rahulFriendly("night");//this is called carrying in which we create a function based on another function with preset arguments and bind allows us to do so.

// EXAMPLE

var years =[1960,1967,1990,1890,2000,1998,2014];


function arrayCalculation(array,fntion){
    var resultArray=[];
    for(var i=0;i<array.length;i++){
        resultArray.push(fntion(array[i]));
    }
    return resultArray;
}

function calculateAge(el){
    return 2020-el;
}



function mature(limit,element){
    return element>=limit;
}

var ages =arrayCalculation(years, calculateAge);

var matureJapan=arrayCalculation(ages,mature.bind(this,20));//in Japan 20 is adult age limit

console.log(ages);
console.log(matureJapan);
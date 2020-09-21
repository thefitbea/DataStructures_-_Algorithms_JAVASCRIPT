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

var years =[1960,1967,1990,1890,2000,1998,2014];

//we could create a function which performs all calc and stores result in an array instead we will create a function which gets another calc as arguments

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

var ages=arrayCalculation(years,calculateAge); 

console.log(ages);

function mature(element){
    return element>=18;
}
var maturity=arrayCalculation(ages,mature);

console.log(maturity);
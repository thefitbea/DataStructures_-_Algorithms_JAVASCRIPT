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

function Person(nameFirst,nameLast,mass,height){
    this.firstName=nameFirst;
    this.lastName=nameLast;
    this.weight=mass;
    this.height=height;


    this.fullName= function(){
        name=this.firstName+" "+this.lastName;
        return this.name;
    };
    this.bmi= function(){
        this.height=this.height/100;
        this.bmi= Math.round(this.weight/(Math.pow(this.height,2)));
        return this.bmi;
    };


};

//constructor to create new objects easily.

var mark = new Person("Mark","Anderson",78,169);
var john = new Person("John","Smith",92,195);

// var mark={
//     firstName: "Mark",
//     lastName: "Anderson",
//     weight: 68,
//     height: 170,
//     bmi: function(){
//         this.height=this.height/100;
//         this.bmi= Math.round(this.weight/Math.pow(this.height,2));
//         return this.bmi;
//     }
// };
// regular version of painful process of creating each object.

if(mark.bmi()>john.bmi()){//calculated and read at same step
    console.log("Bmi of Mark is high with a score of "+ mark.bmi);//at this point bmi is already calculated which is simply read.
}
else if(mark.bmi()<john.bmi()){
    console.log("John has higher bmi as his is "+john.bmi);    
}
else{
    console.log("Both are having equal bmi score!");
}
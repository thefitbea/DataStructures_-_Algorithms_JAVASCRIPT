

(function(){
    //creating a constructor function to describe the question
var Question=function(questionz,options,answer){
    this.quizzQuestion=questionz;
    this.quizzOption=options;
    this.correctAnswer=answer;
}
//Setting prototype property
Question.prototype.ask=function(){
    console.log(this.quizzQuestion);
    for(var i=0,j=1;i<this.quizzOption.length;i++,j++){
        console.log(j+" : "+this.quizzOption[i]);
    }
}
//checking the answer
Question.prototype.checking=function(){
    if(userAnswer===this.correctAnswer){
        console.log("You Win! \nWANNA PLAY AGAIN?");
        alert("You WIN! \n (^_^) ");
    }
//     else if(userAnswer){
//         console.log("You didn't enter a value!");
//         alert("You QUITTED!")
//     }
    else{
        console.log("You Lost! \nBETTER LUCK NEXT TIME#");
        alert("You LOST! \n :) ");
    }
}
//all questions in question bank
var question1=new Question("What is my Name?",["Rahul","John","Meera","Hari"],4);
var question2=new Question("Which is the coolest programming language ever?",["Java","Python","Javascript","C++"],3);
var question3=new Question("Which is the biggest Democratic nation in the world?",["India","UK","Germany","Russia"],1);
var question4=new Question("Which boxer was known as “The Greatest” and “The People’s Champion”?",["Muhammad Ali","Mike Tyson","Sugar Ray Robinson","Floyd Mayweather"],1);
var question5=new Question("What was Twitter’s original name?",["Xober","Tweeter","Twitter","TweetApp"],3);
var question6=new Question("What does BMW stand for (in English)?",["British Motor Works","Bavarian Motor Works","Belgian Motor Works","Bangladesh Motor Works"],2);
var question7=new Question("What is your body’s largest organ?",["Liver","Brain","Heart","Skin"],4);
var question8=new Question("Who wrote “Old Man and The Sea” and is considered one of the greatest writers of the 20th century?",["Ernest Hemingway","William Shakespeare","Hans Christian Andersen","Arthur Conan Dayle"],1);
var question9=new Question("What is the legal term for a voluntary written statement made under oath?",["Power of Attorney","Affidavit","Testimony","Judgement"],2);
var question10=new Question("Bill Gates is the founder of which company?",["Apple","Nike","Volkswagen","Microsoft"],4);
//Datastructure to hold all questions
var questionList=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
//random question picker
var questionSelector=Math.floor(Math.random()*questionList.length);
// console.log(questionList[questionSelector].quizzQuestion);
// console.log(questionList[questionSelector].quizzOption);
questionList[questionSelector].ask();
//user input or user's answer
var userAnswer=parseInt(prompt("Enter Your Option Number: "));
questionList[questionSelector].checking();
})();//adding all code into this to achieve data privacy

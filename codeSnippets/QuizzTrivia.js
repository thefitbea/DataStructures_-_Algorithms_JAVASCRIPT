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
        alert("You WON a Score! \n (^_^) ");
       scoring();
        //If u paste TAG1 here and TAG2 to its TAG2 marked place then exit functionality is removed
    }
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

var questionSelector=0;//to give it global scope
var userAnswer=0;//sets visibility to global
var userScore=0;//To store user score
generateQuestion();

// console.log(questionList[questionSelector].quizzQuestion);
// console.log(questionList[questionSelector].quizzOption);

//function to autogenerate the next question
function generateQuestion(){
    //random question picker
    questionSelector=Math.floor(Math.random()*questionList.length);
    questionList[questionSelector].ask();
    //user input or user's answer
    userAnswer=prompt("Enter Your Option Number: ");

    //*********TAG1***************
    if(userAnswer!=="exit"){
            questionList[questionSelector].checking(parseInt(userAnswer));//**********TAG2************
            generateQuestion();
        }
        else{ 
         console.log("You decided to Quit!");
         alert("You QUITTED!");  
        }
   //*********TAG1****************
    
   //*********TAG2****************
}

//scoring system
function scoring(){
    var userScore=0;
    return function(correctAnswer){
        if(correctAnswer){
            userScore=userScore++;
        }
     return userScore;
    }
}

})();//adding all code into this to achieve data privacy

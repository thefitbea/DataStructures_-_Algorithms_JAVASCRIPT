var johnTeamScore=[];
var mikeTeamScore=[];
var maryTeamScore=[];
var averageTeamScore=[];
var average;

johnTeamScore.push(89,120,103);
mikeTeamScore.push(116,94,123);
maryTeamScore.push(97,134,105);

averageScore(johnTeamScore[0],johnTeamScore[1],johnTeamScore[2]);
averageScore(mikeTeamScore[0],mikeTeamScore[1],mikeTeamScore[2]);
averageScore(maryTeamScore[0],maryTeamScore[1],maryTeamScore[2]);

// switch (averageTeamScore[i]){
//     case averageTeamScore[0]:
// }

if (averageTeamScore[0] > averageTeamScore[1] && averageTeamScore[0] > averageTeamScore[2]){
    console.log("Largest Scoring Team is" + averageTeamScore[0]);
}
else if(averageTeamScore[1] > averageTeamScore[0] && averageTeamScore[1] > averageTeamScore[2]){
    console.log("High score is"+averageTeamScore[1]);
}
else if(averageTeamScore[2] > averageTeamScore[])

function averageScore(score1,score2,score3){
    average=(score1+score2+score3)/3;
    return averageTeamScore.push(average);
}

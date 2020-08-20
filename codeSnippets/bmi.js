var markHeight,markWeight,johnHeight,johnWeight,markBmi,johnBmi;

markHeight = prompt("enter marks height?");
markWeight = prompt("enter his weight?");
johnHeight = prompt("enter johns height");
johnWeight = prompt("enter his weight");

function bmi(weight,height){
    height = height/100;
    return Math.round(weight/(Math.pow(height,2)));
}

// function bmiJohn(johnWeight,johnHeight){
//     return johnBmi = johnWeight/
// }

markBmi=bmi(markWeight,markHeight);
johnBmi=bmi(johnWeight,johnHeight);

alert("Does Mark has higher BMI than john?" + markBmi>johnBmi + " as Mark's Bmi is" + markBmi + "& that of John is"+ johnBmi);
alert(markBmi,johnBmi);
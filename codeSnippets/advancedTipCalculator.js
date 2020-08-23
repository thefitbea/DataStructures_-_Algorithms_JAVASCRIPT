

// var i,j,percentage,bill,totalTip,averageTip;// Declared as Global variables so that scope can be extended


// var mark ={
//     restaurantName: "restaurantA",
//     restaurantBill: [124,48,268,180,42],
//     calculation: function(){
//         this.waiterTip=[];
//         this.restaurantBillWithTip=[];
//         for(i=0;i<this.restaurantBill.length;i++){
//             var bill=this.restaurantBill[i];
//             var percentage;
//             if(bill<50){
//                 percentage=(20/100);
//             }
//             else if(bill>50 && bill<200){
//                 percentage=(15/100);
//             }
//             else{
//                 percentage=(10/100);
//             }
//             this.waiterTip[i]=Math.round((bill*percentage));
//             this.restaurantBillWithTip[i]=(bill+this.waiterTip[i]);
//         }
//     }
// }


// mark.calculation();


//  function averageTipCalc(waiterTip){
//         totalTip=0;
//         for(j=0;j<waiterTip.length;j++){
//             totalTip=(totalTip+waiterTip[j]);
//         }
//         return averageTip=(totalTip/waiterTip.length);
//     }

// mark.average=averageTipCalc(mark.waiterTip);

// //Message to USER

// console.log("Waiter tips are "+ mark.waiterTip+"respectively and total bill is "+ totalTip+". Also average tip is "+ mark.average);


// **************************************USING CONSTRUCTOR********************************************

var i,j,percentage,bill,totalTip,averageTip;// Declared as Global variables so that scope can be extended

function EatOut(restaurantName,restaurantBill) {
    this.restaurantName= restaurantName;
    this.restaurantBill=restaurantBill;
    this.waiterTip=[];
    this.calculation= function(){
        this.waiterTip=[];
        this.restaurantBillWithTip=[];
        for(i=0;i<this.restaurantBill.length;i++){
            var bill=this.restaurantBill[i];
            var percentage;
            if(bill<50){
                percentage=(20/100);
            }
            else if(bill>50 && bill<200){
                percentage=(15/100);
            }
            else{
                percentage=(10/100);
            }
            this.waiterTip[i]=Math.round((bill*percentage));
            this.restaurantBillWithTip[i]=(bill+this.waiterTip[i]);
        }
    };
};

function averageTipCalc(){
        var totalTip=0;
        for(j=0;j<this.restaurantBillWithTip.length;j++){
            this.totalTip=(this.totalTip+this.restaurantBillWithTip[j]);
            this.averageTip=(this.totalTip/this.restaurantBillWithTip.length);
        }
    }



var mark = new EatOut("a",[124,48,268,180,42]);

mark.calculation();

function averageTipCalc(waiterTip){
        totalTip=0;
        for(j=0;j<waiterTip.length;j++){
            totalTip=(totalTip+waiterTip[j]);
        }
        return averageTip=(totalTip/waiterTip.length);
    }

mark.average=averageTipCalc(mark.waiterTip);

//Message to USER

console.log("Waiter tips are "+ mark.waiterTip+" respectively and total bill is "+ totalTip+". Also average tip is "+ mark.average);
// var i,j;//Global variables

// function EatOut(restaurantName,restaurantBill) {
//     this.restaurantName= restaurantName;
//     this.restaurantBill=restaurantBill;
//     this.waiterTip=[];
//     this.waiterTip= function(){
//         for(i=0;i<this.waiterTip.length;i++){
//             if(this.restaurantBill[i]<50){
//                 this.restaurantBillWithTip[i]=(this.restaurantBill[i]*(20/100));
//                 return this.restaurantBillWithTip[i];
//             }
//             else if(this.restaurantBill[i]>50 && this.restaurantBill[i]<200){
//                 this.restaurantBillWithTip[i]=(this.restaurantBill[i]*(15/100));
//                 return this.restaurantBillWithTip[i];
//             }
//             else{
//                 this.restaurantBillWithTip[i]=(this.restaurantBill[i]*(10/100));
//                 return this.restaurantBillWithTip[i];
//             }
//         };
//         return this.waiterTip[i];
//     };
//     this.restaurantBillWithTip=[];
//     this.restaurantBillWithTip=function(){
//         this.restaurantBillWithTip[i]=(this.restaurantBill[i]+this.waiterTip[i]);
//         return this.restaurantBillWithTip[i];
//     }
//     this.averageTip=function(){
//         var totalTip=0;
//         for(j=0;j<this.restaurantBillWithTip.length;j++){
//             this.totalTip=(this.totalTip+this.restaurantBillWithTip[j]);
//             this.averageTip=(this.totalTip/this.restaurantBillWithTip.length);
//         }
//         return this.averageTip;
//     };
// };

// *****************-not working as of now********************************

var i,j;//Global variables

function EatOut(restaurantName,restaurantBill) {
    this.restaurantName= restaurantName;
    this.restaurantBill=restaurantBill;
    this.Calculation= function(){
        this.waiterTip=[];
        this.restaurantBillWithTip=[];
        for(i=0;i<this.waiterTip.length;i++){
            if(this.restaurantBill[i]<50){
                this.waiterTip[i]=(this.restaurantBill[i]*(20/100));
                this.restaurantBillWithTip[i]=(this.restaurantBill[i]+this.waiterTip[i]);
            }
            else if(this.restaurantBill[i]>50 && this.restaurantBill[i]<200){
                this.waiterTip[i]=(this.restaurantBill[i]*(15/100));
                this.restaurantBillWithTip[i]=(this.restaurantBill[i]+this.waiterTip[i]);
            }
            else{
                this.waiterTip[i]=(this.restaurantBill[i]*(10/100));
                this.restaurantBillWithTip[i]=(this.restaurantBill[i]+this.waiterTip[i]);
            }
        };
        return this.waiterTip[i];
    };
    
   
};


var mark = new EatOut("A",[124,48,268,180,42]);

 function averageTipCalc(){
        var totalTip=0;
        for(j=0;j<this.restaurantBillWithTip.length;j++){
            this.totalTip=(this.totalTip+this.restaurantBillWithTip[j]);
            this.averageTip=(this.totalTip/this.restaurantBillWithTip.length);
        }
    }

//Message to USER

console.log("Waiter tip is "+ mark+" and total bill is "+ mark+". Also average tip is "+ mark);
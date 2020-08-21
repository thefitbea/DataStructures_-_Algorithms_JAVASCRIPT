var restaurantBill=[];
var restaurantBillWithTip=[];
var waiterTip=[];

restaurantBill=[124,48,268];//could have used push method but chose not to

function tipCalculator(i){
    if(restaurantBill[i]<50){
        waiterTip[i]=restaurantBill[i]*(20/100);
        restaurantBillWithTip[i]=waiterTip[i]+restaurantBill[i];
        console.log("Tip is "+ waiterTip[i]+" & total amount is "+ restaurantBillWithTip[i]);
    }
    else if(restaurantBill[i]>50 && restaurantBill[i]<200){
       waiterTip[i]=restaurantBill[i]*(15/100);
       restaurantBillWithTip[i]=waiterTip[i]+restaurantBill[i];
       console.log("Tip is "+ waiterTip[i]+" & total amount is "+ restaurantBillWithTip[i]); 
    }
    else{
        waiterTip[i]=restaurantBill[i]*(10/100);
        restaurantBillWithTip[i]=waiterTip[i]+restaurantBill[i];
        console.log("Tip is "+ waiterTip[i]+" & total amount is "+ restaurantBillWithTip[i]);
    }
}
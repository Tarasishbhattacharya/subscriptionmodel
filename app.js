
const date_of_months=[["jan",31],["feb",28],["mar",31],["apr",30],["may",31],["june",30],["july",31],
["aug",31],["sep",30],["oct",31],["nov",30],["dec",31]]

const calculate_subscription=(expiry_date,months_to_buy,monthly_cost)=>{
   var date=+expiry_date.split("/")[0];
   var month=+expiry_date.split("/")[1];
   var year=+expiry_date.split("/")[2];
//    To calculate total days
   var total_days=months_to_buy*30;
    var usable_days=Math.abs(date_of_months[month-1][1]-date);
    var cost;
   for(let i=month+1;i<month+Number(months_to_buy);i++){
       usable_days+=date_of_months[i-1][1];
   }
//    if expire on 1st of month;

var new_expiry_1st=usable_days+1;
var new_expire_15th=usable_days+15;
var total_month=month+Number(months_to_buy);
if(new_expiry_1st<=total_days && new_expire_15th<=total_days){
    var maxi=Math.max(new_expiry_1st,new_expire_15th);
   var per_day_cost=parseFloat(monthly_cost/30);
   cost=per_day_cost*maxi;

   if(total_month>12){
    var new_expiry_date=`${15+"/"+total_month-12+"/"+year+1}`;
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }else if(total_month<10){
    var new_expiry_date=`${15+"/"+"0"+total_month+"/"+year}`;
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }else{
    var new_expiry_date=`${15+"/"+(total_month)+"/"+year}`;
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }
}else {
    var per_day_cost=parseFloat(monthly_cost/30);
   cost=parseFloat(per_day_cost*new_expiry_1st-per_day_cost);
   if(total_month>12){
    var new_expiry_date=(`${01+"/"+total_month-12+"/"+year+1}`);
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }else if(total_month<10){
    var new_expiry_date=`${01+"/"+"0"+(total_month)+"/"+(year)}`;
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }else{
    var new_expiry_date=`${01+"/"+(total_month)+"/"+year}`;
    console.log(new_expiry_date.toString(),cost.toFixed(2))
   }
}

}


calculate_subscription("19/06/2022",1,1000)
calculate_subscription("03/06/2022",3,400)
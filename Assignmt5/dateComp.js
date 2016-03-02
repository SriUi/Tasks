console.log('start------------------------comparision----------------');


dateComparison("03/22/2016");




function dateComparison(giveDateInString){
	console.log('start------------------------dateComparison----------------');
	var giveDate = new Date(giveDateInString);
	console.log('giveDate='+giveDate);

	if (giveDate == d)
	{
		console.log("Both dates are same");
	}
	else if(giveDate > d)
	{
		console.log("Given date is greater than the current date");
	}
	else
	{
		console.log("Current Date is greater than the given date");
	}
		console.log('end------------------------dateComparison----------------');

}

function validDate(day,month,year){

	var aDate =  new Date(month+'/'+day+'/'+year);

	console.log(aDate);

	if('Invalid Date'==aDate){
		console.log('INVALID DATE GIVEN AS INPUT');
	}else{
		console.log('validdate = '+aDate);
	}
}
validDate(30,11,2016);
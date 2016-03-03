/*testingingg
*/

function formatPhoneNum(num,country){
	if(  !isNaN(num) && (num.toString().length==10) ){

		if(country=="US"){
			   	var strFormat= num.toString();
			   	var usNum = "+1 ("+strFormat.substring(0, 3)+") "+strFormat.substring(3,6)+"-"+strFormat.substring(6);
			 	console.log("US number="+usNum);
		}else if(country=="India"){
			   	var strFormat= num.toString();
			   	var indiaNum = "+91 "+strFormat.substring(0, 5)+"-"+strFormat.substring(5);
			 	console.log("India number ="+indiaNum);
		}
	}else {
		console.log("Enter valid number="+num);
	}				
}
formatPhoneNum(9807654321,'India');
formatPhoneNum(9807654321,'us');
formatPhoneNum(9807654321,'US');
formatPhoneNum(23444,"US");
formatPhoneNum("hjhjk","US");

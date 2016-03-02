var d = new Date();
function plusDate() {
	console.log('start------------------------plusDate----------------');
	console.log('d='+d);
	/*console.log('d='+d);
	console.log(d);
	*/
	var datePlus= d.getDate()+30;
	console.log("datePlus30="+datePlus);
	console.log('end------------------------plusDate----------------');
}

function dateFormat(){
	console.log('start------------------------dateFormat----------------');

	var day= d.getDate();

	var DD = getTwoDigits(day);

	var month=getTwoDigits(d.getMonth()+1);//month starts from 0 for january

	var year=d.getFullYear();
	var DDMMYYYY= month+"/"+DD+"/"+year;
	console.log('DDMMYYYY='+DDMMYYYY);
	console.log('end------------------------dateFormat----------------');
	return "sri";
}


function getTwoDigits(anyDigit){
	var twoDigits = anyDigit;

	if(anyDigit<10){
		twoDigits = '0'+anyDigit;
	}

	return twoDigits;
}

console.log('main------------------------11111----------------');

console.log(plusDate());

	console.log('main------------------------2222----------------');


console.log("return of dateFormat="+dateFormat());
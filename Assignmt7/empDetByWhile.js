function getEmployees(){
	var employees=[ {fName:"Harry",lName:"potter"},
					{fName:"James",lName:"bond"},
					{fName:"suan",lName:"elizabeth"}
					];
return employees;					
}
function printEmployees(){
	var empList = getEmployees();
	var countEmp= empList.length;
	var i=0;
	while(i< countEmp){
		var aEmp = empList[i]; 
		document.write("Name= "+aEmp.fName+" "+aEmp.lName+"<br/>");
		i++;
	}
}


printEmployees();
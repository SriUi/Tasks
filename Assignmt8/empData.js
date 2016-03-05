function getEmployees(){
	var employees=[ {fName:"Harry",lName:"potter",age:"20",salary:"3000",dept:"Account"},
					{fName:"James",lName:"bond",age:"30",salary:"5000",dept:"Storage"},
					{fName:"suan",lName:"elizabeth",age:"40",salary:"4000",dept:"IT"}
					];
return employees;					
}
getEmployees();

function createDynTable(){

	//create a table start and end tag
	var div= document.getElementById("divId");
	var t= document.createElement("table");
	t.style.border = "5px solid blue";

	var trh= document.createElement("tr");
	var th1= document.createElement("th");
	th1.innerText= "First Name";
	var th2= document.createElement("th");
	th2.innerText= "Last Name";
	var th3= document.createElement("th");
	th3.innerText= "Age";
	var th4= document.createElement("th");
	th4.innerText= "Salary";
    var th5= document.createElement("th");
	th5.innerText= "Department";


	trh.appendChild(th1);
	trh.appendChild(th2);
	trh.appendChild(th3);
	trh.appendChild(th4);
	trh.appendChild(th5);


	t.appendChild(trh);

	var empList = getEmployees();
	var countEmp= empList.length;
    for(var j=0;j<countEmp;j++){
    	var tr= document.createElement("tr");
    	var td1= document.createElement("td");
    	var td2= document.createElement("td");
    	var td3= document.createElement("td");
    	var td4= document.createElement("td");
    	var td5= document.createElement("td");

		var aEmp = empList[j]; 

		//add data
    	td1.innerText=aEmp.fName;
    	td2.innerText=aEmp.lName;
    	td3.innerText=aEmp.age;
    	td4.innerText=aEmp.salary;
    	td5.innerText=aEmp.dept;

    	//append elements to table
    	tr.appendChild(td1);
    	tr.appendChild(td2);
    	tr.appendChild(td3);
    	tr.appendChild(td4);
    	tr.appendChild(td5);

    	t.appendChild(tr);
 	}
    div.appendChild(t);
}


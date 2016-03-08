function formCreation(){
	var divE1 = document.getElementById("container");
	var form = document.createElement("form");
	//var style = document.getElementByClassName("inputdiv");
	document.getElementById("container").className = "inputdiv";

	var label1 = document.createElement("label");
	var empFname = document.createElement("input");
	empFname.type = "text";
		
	var label2 = document.createElement("label");
	var empLname = document.createElement("input");
	empLname.type = "text";

	var label3 = document.createElement("label");
	var empAge = document.createElement("input");
	empAge.type = "number";

	var label4 = document.createElement("label");
	var empSal = document.createElement("input");
	empSal.type = "number";

	var label5 = document.createElement("label");
	var empDept = document.createElement("select");
	var deptOption1 = document.createElement("option");
	var deptOption2 = document.createElement("option");
	var deptOption3 = document.createElement("option");
	deptOption1.text= "Finance";
	deptOption2.text = "Mkt";
	deptOption3.text = "IT";
	
	var label6 = document.createElement("label");
	var empCountry = document.createElement("select");
	var cOptn1 = document.createElement("option");
	var cOptn2 = document.createElement("option");
	cOptn1.text= "USA";
	cOptn2.text= "IND";

	var label7 = document.createElement("label");
	var empGender = document.createElement("input");
	empGender.type = "radio button";

	var label8 = document.createElement("label");
	var empMS = document.createElement("input");
	empMS.type = "checkbox";

	var label9 = document.createElement("label");
	var submit = document.createElement("input");
	submit.type = "submit";

	label1.innerText="FirstName : ";
	label2.innerText="LastName : ";
	label3.innerText="Age : ";
	label4.innerText="Salary : ";
	label5.innerText="Department : ";
	label6.innerText="Country : ";
	label7.innerText="Gender : ";
	label8.innerText="Marital Status : ";
	label9.innerText=" Submit Form ";

	form.appendChild(document.createElement("br"));
	form.appendChild(label1);
	form.appendChild(empFname);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label2);
	form.appendChild(empLname);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label3);
	form.appendChild(empAge);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label4);
	form.appendChild(empSal);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label5);
	form.appendChild(empDept);
	empDept.appendChild(deptOption1);
	empDept.appendChild(deptOption2);
	empDept.appendChild(deptOption3);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label6);
	form.appendChild(empCountry);
	empCountry.appendChild(cOptn1);
	empCountry.appendChild(cOptn2);
	form.appendChild(document.createElement("br"));


	form.appendChild(document.createElement("br"));
	form.appendChild(label7);
	form.appendChild(empGender);
	form.appendChild(document.createElement("br"));

	form.appendChild(document.createElement("br"));
	form.appendChild(label8);
	form.appendChild(empMS);
	form.appendChild(document.createElement("br"));

	form.appendChild(label9);
	form.appendChild(document.createElement("br"));
	form.appendChild(submit);
	form.appendChild(document.createElement("br"));
	divE1.appendChild(form);

}
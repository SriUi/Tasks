 
var a, b;
 function add(){
 	return a+b;
 }
 function mul(){
 	 return a*b;
 }
 function div(){
 	 var part=a/b;
 }
 function sub(){
 	 var minus=a-b;
 }

 function operation(mathType){
 	var x,y,result;
	 x= document.getElementById("input1").value;
	 a=Number(x);
	 y= document.getElementById("input2").value;
	 b=Number(y);

 	switch(mathType){
 		case "add":
 					result=add();
 					break;
 		case "mul":
 					result=mul();
 					break;
 		case "div":
 					result=div();
 					break;
 		case "sub":
 					result=sub();
 					break;
 		default:
 					document.write("Enter some action");
 					break;
 	}
 	document.getElementById("resultLablelId").innerHTML=result;
 	console.log(result);
 }

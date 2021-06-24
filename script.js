
var operand1 = [];
var operand2 = 0;
var operator = undefined;

function display(num){
	operand1.push(num);
	document.getElementById("current").innerHTML = operand1.join('');
}

function operation(sign){
	operator = sign;
	operand2 = operand1.join('');
	document.getElementById("previous").innerHTML = operand2;
	operand1.length = 0;
    document.getElementById("current").innerHTML = "";
}

function compute(){
	if(operand2 == 0 && operand1.length == 0){
		document.getElementById("previous").innerHTML = "";
		document.getElementById("current").innerHTML = "";
	}
	else if(operand1.length !== 0 && operand2 == 0){
		document.getElementById("previous").innerHTML = operand1.join('');
		document.getElementById("current").innerHTML = operand1.join('');
	}
	else{
		if(operator == '+'){
			var result = parseInt(operand2) + parseInt(operand1.join(''));
			document.getElementById("previous").innerHTML = operand2 + "+" + operand1.join('');
			document.getElementById("current").innerHTML = result;
		}
		else if(operator == "-"){
			var result = parseInt(operand2) - parseInt(operand1.join(''));
			document.getElementById("previous").innerHTML = operand2 + "-" + operand1.join('');
			document.getElementById("current").innerHTML = result;
		}
		else if(operator == "*"){
			var result = parseInt(operand2) * parseInt(operand1.join(''));
			document.getElementById("previous").innerHTML = operand2 + "*" + operand1.join('');
			document.getElementById("current").innerHTML = result;
		}
		else{
			var result = parseInt(operand2) / parseInt(operand1.join(''));
			document.getElementById("previous").innerHTML = operand2 + "/" + operand1.join('');
			document.getElementById("current").innerHTML = result;
		}
	}
}

function clearDisplay(){
		operand1.length = 0;
		operand2 = 0;
		operator = undefined;
		document.getElementById("current").innerHTML = "";
		document.getElementById("previous").innerHTML = "";
}

function del(){
	console.log("hello");
	if(operand1.length !== 0 && operand2 == 0){
		document.getElementById("previous").innerHTML = "";
		document.getElementById("current").innerHTML = operand1.join('').toString().slice(0, -1);
	}
	else if(operand1.length !== 0 && operand2 !== 0){
		document.getElementById("current").innerHTML = operand1.join('').toString().slice(0, -1);
	}
	else if(operand1.length == 0 && operand2 != 0){
		operator = undefined;
		document.getElementById("previous").innerHTML = operand2.toString().slice(0, -1);
	}
	else{
		document.getElementById("previous").innerHTML = "";
		document.getElementById("current").innerHTML = "";
	}
}
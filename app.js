let calculator = require('./modules/calculator');
const parameters = process.argv.slice(2);
param1 = parameters[1];
param2 = parameters[2]
if(isNaN(param1) && isNaN(param2)){
	console.log('The entered input is invalid');
	return;
}

switch(parameters[0]) {
	case 'add':
		console.log(calculator.Add(param1,param2));
		break;
	case 'sub':
		console.log(calculator.Subtract(param1,param2));
		break;
	case 'mul':
		console.log(calculator.Product(param1,param2));
		break;
	case 'div':
		console.log(calculator.Division(param1,param2));
		break;
	case 'mod':
		console.log(calculator.Modulus(param1,param2));
		break;
	case 'square':
		console.log(calculator.Square(param1));
		break;
	case 'cube':
		console.log(calculator.Cube(param1));
		break;
	default:
		console.log('Sorry, wrong choice code');
}